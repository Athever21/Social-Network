import React, { useState, useEffect } from "react";
import { base_url } from "../../../config";
import { useDispatch } from "react-redux";
import axios from "axios";

import events from "./event";

export default ({ f }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const addChat = (x) => {
    dispatch({
      type: "ADD_CHAT",
      data: {
        user: x,
      },
    });
  };

  const chatOpen = () => {
    const div = document.querySelector(`[data-friend="${f.username}"]`);
    div.style.animationName = "";
  };

  const reduceCounter = (number) => {
    setCount((c) => c - parseInt(number));
  };

  const blink = () => {
    const div = document.querySelector(`[data-friend="${f.username}"]`);
    div.style.animationName = "blink";
    div.style.animationDuration = "1s";
    div.style.animationIterationCount = "infinite";
  };

  const addToCounter = (animate) => {
    setCount((c) => c + 1);
    if (animate) {
      blink();
    }
  };

  useEffect(() => {
    axios.get(`${base_url}/message/count?user=${f.id}`).then(({ data }) => {
      if (data.count > 0) {
        setCount(data.count);
        blink();
      }
    });

    events.on(`open-chat-${f.username}`, chatOpen);
    events.on(`reduce-counter-${f.username}`, reduceCounter);
    events.on(`add-to-counter-${f.username}`, addToCounter);

    return () => {
      events.off(`open-chat-${f.username}`, chatOpen);
      events.off(`reduce-counter-${f.username}`, reduceCounter);
      events.off(`add-to-counter-${f.username}`, addToCounter);
    };
  }, []);

  return (
    <div className="friend" onClick={() => addChat(f)} data-friend={f.username}>
      <img
        src={f.img ? `${base_url}/users/img/${f.img}` : "/dist/77111.webp"}
      />
      <p>{f.username}</p>
      {count > 0 && <p className="count">{count}</p>}
    </div>
  );
};
