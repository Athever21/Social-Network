import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "./config";
import { hot } from "react-hot-loader";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";

import Auth from "./components/auth/Auth";
import Main from "./components/main/Main";

import {url} from './config';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .post(`${base_url}/auth/session`)
      .then(({ data }) => {
        if (data.username) {
          dispatch({
            type: "LOGIN_USER",
            data,
          });
        } else {
          dispatch({
            type: "LOGOUT_USER",
          });
        }
        setFlag(true);
      })
      .catch(() => {
        dispatch({
          type: "LOGOUT_USER",
        });
      });
  }, []);

  return (
    <div>
      {!flag ? (
        <h1>Loading</h1>
      ) : (
        <>
          {user.username ? (
            <Main />
          ) : (
            <Auth />
          )}
        </>
      )}
    </div>
  );
};

export default hot(module)(App);
