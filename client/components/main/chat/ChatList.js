import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { base_url } from "../../../config";
import axios from "axios";
import "./Chat.scss";
import Friend from "./Friend.js";
import events from "./event";

export default () => {
  const user = useSelector((state) => state.user);
  const [friends, setFriends] = useState([]);
  const socket = useSelector((state) => state.socket);
  const chats = useSelector((state) => state.chats);
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();

  const s = (a, b) => {
    if (a > b) return 1;
    return -1;
  };

  const addFriend = (friend) => {
    console.log("ummmmmmm?", friend);
    setFriends((f) => [...f, JSON.parse(friend)].sort(s));
  };

  const reciveMessage = (from, recivedMessage) => {
    const f = JSON.parse(from);

    if (chats.findIndex((x) => x.user.username === f.username) >= 0) {
      const div = document.querySelector(`[data-user="${f.username}"]`);
      const [header, message, input] = div.children;

      dispatch({
        type: "UPDATE_CHAT",
        data: {
          user: f.username,
          message: JSON.parse(recivedMessage),
        },
      });
      console.log(message);
      if (message.style.display == "none") {
        message.style.display = "block";
        input.style.display = "block";
      } 

      input.parentElement.style.animationName = "blink";
      input.parentElement.style.animationDuration = "1.5s";
      input.parentElement.style.animationIterationCount = "infinite";
      message.scrollTop = message.scrollHeight;
      events.emit(`add-to-counter-${f.username}`,false);
    } else {
      events.emit(`add-to-counter-${f.username}`,true);
    }
  };

  useEffect(() => {
    axios
      .get(`${base_url}/friends/${user.id}`)
      .then(({ data }) => {
        setPage((p) => p + 1);
        setFriends(data.friends.sort(s));
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("newFriend", addFriend);
      socket.on("reciveChatMessage", reciveMessage);

      return () => {
        socket.off("newFriend", addFriend);
        socket.off("reciveChatMessage", reciveMessage);
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("reciveChatMessage", reciveMessage);

      return () => {
        socket.off("reciveChatMessage", reciveMessage);
      };
    }
  }, [chats])

  const loadMore = async () => {
    const { data } = await axios.get(
      `${base_url}/friends/${user.id}?page=${page}`
    );

    if (data.friends < 10) {
      setMore(true);
    }
    setPage((p) => p + 1);
    setFriends((f) => [...f, ...data.friends].sort(s));
  };

  return (
    <aside className="chat">
      {friends.length > 0 ? (
        <>
          {friends.map((x) => (
            <Friend key={x.id} f={x} />
          ))}
          {friends.length % 10 === 0 && !more && (
            <div className="load-more" onClick={loadMore}>
              Load more
            </div>
          )}
        </>
      ) : (
        <h2>No friends</h2>
      )}
    </aside>
  );
};
