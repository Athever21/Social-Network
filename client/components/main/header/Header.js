import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import {base_url} from '../../../config';
import "./Header.scss";

import Notifications from './Notifications';
import Search from './Search';

export default ({controls}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.post(`${base_url}/auth/logout`);
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  return (
    <header>
      <div className="left">
        <h1>
          <Link to="/">Social Network</Link>
        </h1>
        <Search controls={{showSearch: controls.showSearch,setShowSearch: controls.setShowSearch}}/>
      </div>
      <div className="header-user">
        <Notifications controls={{showNotif: controls.showNotif,setShowNotif: controls.setShowNotif}}/>
        <Link to={`/user/${user.username}`}>{user.username}</Link>
        <button onClick={logout}>Sign Out</button>
      </div>
    </header>
  );
};
