import React, { useState } from "react";
import "./Admin.scss";

import Files from "./Files";
import Posts from "./Posts";
import Users from "./Users";

export default () => {
  const [view, setView] = useState("posts");

  return (
    <div className="admin">
      <div className="change-view">
        <div className="change" onClick={() => setView("posts")}>
          Posts
        </div>
        <div className="change" onClick={() => setView("files")}>
          Files
        </div>
        <div className="change" onClick={() => setView("users")}>
          Users
        </div>
      </div>
      <div className="view">
        {view === "posts" && <Posts />}
        {view === "files" && <Files />}
        {view === "users" && <Users />}
      </div>
    </div>
  );
};
