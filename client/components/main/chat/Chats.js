import React from "react";
import { useSelector} from "react-redux";

import Chat from './Chat';

export default () => {
  const chats = useSelector((state) => state.chats);
  
  return (
    <div className="chats">
      {chats.map((x,i) => <Chat chat={x} key={i} />)}
    </div>
  );
};
