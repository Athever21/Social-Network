import React,{useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { base_url } from "../../config";

import { useField } from "../../hooks/useField";

export default ({setPathname,setError}) => {
  const username = useField("text");
  const password = useField("password");
  const history = useHistory();

  useEffect(() => setPathname(window.location.pathname) ,[]);

  const register = async () => {
    try {
      const res = await axios.post(`${base_url}/users`, {
        username: username.value,
        password: password.value,
      });

      console.log(res);
      history.push("/auth/login");
    } catch ({response}) {
      console.log(response)
      setError(response.data.messages[0]);
      setTimeout(() => setError(""),3000);
    }
  };

  return (
    <div className="auth-form"> 
      <h2>Sign Up</h2>
      <input {...username} placeholder="Username..." />
      <input {...password} placeholder="Password..." />
      <button onClick={register}>Sign Up</button>
    </div>
  );
};
