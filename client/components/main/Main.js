import React, { useEffect, useState } from "react";
import "./Main.scss";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import socketioClient from "socket.io-client";
import axios from "axios";
import { base_url } from "../../config";

import Header from "./header/Header";
import Posts from "./posts/Posts";
import ShowUser from "./ShowUser";
import Chat from "./chat/ChatList";
import Chats from "./chat/Chats";
import SinglePost from "./posts/SinglePost";
import Admin from "./admin/Admin";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    const socket = socketioClient("http://localhost:3000");

    socket.emit("conn", user.username);
    dispatch({
      type: "ADD_SOCKET",
      data: socket,
    });

    axios.get(`${base_url}/posts/user/${user.id}`).then(({ data }) => {
      console.log("data: ", data);
      dispatch({
        type: "ADD_POSTS",
        data,
      });
    });

    return () => {
      socket.emit("disconn");
    };
  }, []);

  const close = ({ target }) => {
    if (target.classList[0] === "delete") return;
    const c = target.parentElement.classList[0];
    if (c === "search" || c === "results") {
      setShowNotif(false);
    } else if (c === "notif" || c === "notif-display") {
      setShowSearch(false);
    } else {
      setShowSearch(false);
      setShowNotif(false);
    }
  };

  return (
    <div onClick={close}>
      <Header
        controls={{ showSearch, showNotif, setShowNotif, setShowSearch }}
      />
      <main>
        <Switch>
          <Route exact path="/user/:username" component={ShowUser} />
          <Route exact path="/post/:id" component={SinglePost} />
          {user.username === "admin" && <Route exact path="/admin" component={Admin}/>}
          <Route
            path="/"
            render={() => (
              <>
                <Posts />
                <Chat />
              </>
            )}
          />
        </Switch>
        <Chats />
      </main>
    </div>
  );
};
