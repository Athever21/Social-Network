import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

import { base_url } from "../../../config";

export default ({controls}) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [more,setMore] = useState(false);
  const history = useHistory();

  const loadUsers = async (text) => {
    const { data } = await axios.get(
      `${base_url}/users?text=${text}`
    );

    setUsers([...data]);
  };

  const show = async () => {
    controls.setShowSearch(true);
    loadUsers(search);
  };

  const handleChange = async ({ target }) => {
    setSearch(target.value);
    loadUsers(target.value);
  };

  const loadMore = async() => {
    const { data } = await axios.get(
      `${base_url}/users?text=${search}&page=${page+1}`
    );

    if(data < 5) {
      setMore(true);
    }

    setPage(p => p+1);
    setUsers(u => [...u,...data]);
  }

  const goToUser = (username) => {
    history.push(`/user/${username}`);
    controls.setShowSearch(false);
  }

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        onFocus={show}
      />
      {controls.showSearch && (
        <div className="results">
          {users.length > 0 ? (
            users.map((x) => {
              return (
                <div className="result" onClick={() => goToUser(x.username)} key={x.id} to={`/user/${x.username}`} >
                  <img src={(x.img) ? `${base_url}/users/img/${x.img}` : '/dist/77111.webp'}/>
                  <h3>{x.username}</h3>
                </div>
              );
            })
          ) : (
            <h2>No users found</h2>
          )}
        {(users.length % 5 === 0 && !more) && <div className="load-more" onClick={loadMore}>Load more</div>}
        </div>
      )}
    </div>
  );
};
