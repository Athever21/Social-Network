import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { base_url } from "../../../config";
import events from "./event";

export default ({ chat }) => {
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [init, setInit] = useState(true);
  const [more, setMore] = useState(false);
  const [page, setPage] = useState(0);

  const readMessage = async() => {
    let c = 0;
    for(const m of chat.messages) {
      if(!m.read && m.to === user.id) {
        console.log(m);
        const {data} = await axios.patch(`${base_url}/message/${m.id}`);
        dispatch({
          type: "READ_MESSAGE",
          data: {
            user: chat.user.username,
            message: data
          }
        });
        c++;
      }
    }
    events.emit(`reduce-counter-${chat.user.username}`,c);

    const div = document.querySelector(`[data-user="${chat.user.username}"]`);
    div.style.animationName = "";
  }

  useEffect(() => {
    axios.get(`${base_url}/message?user=${chat.user.id}`).then(({ data }) => {
      dispatch({
        type: "LOAD_CHAT",
        data: {
          user: chat.user.username,
          messages: data.reverse(),
        },
      });
      events.emit(`open-chat-${chat.user.username}`);
      readMessage();
    });
  }, [socket]);

  const loadMore = async () => {
    const { data } = await axios.get(
      `${base_url}/message?user=${chat.user.id}?page=${page}`
    );
    if (data.length < 20) {
      setMore(true);
    }
    setPage((p) => p + 1);
    dispatch({
      type: "LOAD_MORE",
      data: {
        user: chat.user.username,
        messages: data.reverse(),
      },
    });
  };

  useEffect(() => {
    if (init) {
      setTimeout(() => {
        const div = document.querySelector(
          `[data-with="${chat.user.username}"]`
        );
        div.scrollTop = div.scrollHeight;
        setInit(false);
      }, 60);
    }
  }, [chat.messages]);

  const toggle = ({ target }) => {
    if (target !== document.getElementById("close")) {
      if (target.classList[0] === "header") {
        const parent = target.parentElement;
        const [h, div, input] = parent.children;

        if (div.style.display === "none") {
          div.style.display = "block";
          input.style.display = "block";
        } else {
          div.style.display = "none";
          input.style.display = "none";
        }
      } else {
        const parent = target.parentElement.parentElement;
        const [h, div, input] = parent.children;

        if (div.style.display === "none") {
          div.style.display = "block";
          input.style.display = "block";
        } else {
          div.style.display = "none";
          input.style.display = "none";
        }
      }
    }
  };

  const closeChat = () => {
    dispatch({
      type: "CLOSE_CHAT",
      data: {
        user: chat.user.username,
      },
    });
  };

  const sendMessage = async (e) => {
    if (e.keyCode === 13 && message !== "") {
      const { data } = await axios.post(`${base_url}/message`, {
        from: user.id,
        to: chat.user.id,
        message,
      });
      socket.emit(
        "sendChatMessage",
        JSON.stringify(data),
        chat.user.username,
        JSON.stringify(user)
      );
      dispatch({
        type: "UPDATE_CHAT",
        data: {
          user: chat.user.username,
          message: data,
        },
      });
      const div = e.target.previousSibling;
      console.log(div);
      div.scrollTop = div.scrollHeight;
      setMessage("");
    }
  };

  return (
    <div className="open-chat" data-user={chat.user.username} onMouseEnter={readMessage}>
      <div className="header" onClick={toggle}>
        <img
          src={
            chat.user.img
              ? `${base_url}/users/img/${chat.user.img}`
              : "/dist/77111.webp"
          }
        />
        <p>{chat.user.username}</p>
        <span id="close" onClick={closeChat}>
          x
        </span>
      </div>
      <div className="messages" data-with={chat.user.username}>
        {(chat.messages.length % 20 === 0 && !more && chat.messages.length !== 0) && (
          <div className="load-more" onClick={loadMore}>
            Load more
          </div>
        )}
        {chat.messages.map((x, i) => {
          return (
            <div className="message-container" key={i}>
              <div
                className={
                  x.from === user.id ? "my-message" : "someone-message"
                }
              >
                {x.message}
              </div>
            </div>
          );
        })}
      </div>
      <input
        className="send-message"
        value={message}
        onKeyUp={sendMessage}
        onChange={({ target }) => setMessage(target.value)}
        data-with={`input-${chat.user.username}`}
      />
    </div>
  );
};
