import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../config";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  let { username } = useParams();
  const [user, setUser] = useState({});
  const loggedUser = useSelector((state) => state.user);
  const [value, setValue] = useState(loggedUser.username);
  const dispatch = useDispatch();
  const [error,setError] = useState("");
  const socket = useSelector(state => state.socket);

  useEffect(() => {
    axios.get(`${base_url}/users/${username}`).then(({ data }) => {
      setUser(data);
    });
  }, [window.location.pathname]);

  const addFriend = async () => {
    const {data} = await axios.post(`${base_url}/notif`, {
      type: 'FRIEND',
      from: loggedUser.id,
      to: user.id,
    });

    socket.emit('addNotif',JSON.stringify(data),user.username,JSON.stringify(loggedUser));
  };

  const deleteAccount = async () => {
    await axios.delete(`${base_url}/users/${loggedUser.id}`);
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  const uploadPhoto = async (files) => {
    const file = files[0];

    if (file.type.split("/")[0] != "image") {
      setError("Invalid file type");
      setTimeout(() => setError(""),3000);
      return;
    }
    
    if (file.size > 1500000) {
      setError("File too big");
      setTimeout(() => setError(""),3000);
      return;
    }

    const formData = new FormData();
    formData.append("userPhoto",file);

    try {
      const res = await axios.post(`${base_url}/users/img`, formData);
      console.log(res);
    } catch(err) {
      console.log(err.message)
    }
    

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(document.getElementById('uPhoto'));
      document.getElementById('uPhoto').src = reader.result;
    }
  };
  console.log(user)
  return (
    <div className="user-page">
      {user.username ? (
        <div className="user-info">
          {error && <div className="error">{error}</div>}
          <div className="user-image">
            {loggedUser.username === user.username ? (
              <>
                <label htmlFor="userPhoto">
                  <img id="uPhoto" src={user.img ? `${base_url}/users/img/${user.img}`: "/dist/77111.webp"} />
                </label>
                <input
                  type="file"
                  id="userPhoto"
                  multiple
                  accept="image/*"
                  onChange={({ target }) => uploadPhoto(target.files)}
                  style={{ display: "none" }}
                />
              </>
            ) : (
              <img src={user.img ? `${base_url}/users/img/${user.img}`: "/dist/77111.webp"} />
            )}
          </div>
          <p>{user.username}</p>
          {user.username !== loggedUser.username ? (
            <button className="add-friend" onClick={addFriend}>Add to friends</button>
          ) : (
            <>
              <input
                type="text"
                value={value}
                onChange={({ target }) => setValue(target.value)}
              />
              <button className="delete-account" onClick={deleteAccount}>
                Delete account
              </button>
            </>
          )}
        </div>
      ) : (
        <h2>User {username} not found.</h2>
      )}
    </div>
  );
};
