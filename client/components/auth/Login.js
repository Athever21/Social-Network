import React,{useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { base_url } from "../../config";

import { useField } from "../../hooks/useField";

export default ({setPathname,setError}) => {
  const username = useField("text");
  const password = useField("password");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => setPathname(window.location.pathname) ,[]);

  const login = async () => {
    try {
      const res = await axios.post(`${base_url}/auth/login`, {
        username: username.value,
        password: password.value,
      });
      console.log(res);
      dispatch({
        type: "LOGIN_USER",
        data: res.data,
      });
      history.push("/");
    } catch ({response}) {
      setError(response.data.error);
      setTimeout(() => setError(""),3000);
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      <input {...username} placeholder="Username..." />
      <input {...password} placeholder="Password..." />
      <button onClick={login}>Sign In</button>
    </div>
  );
};
