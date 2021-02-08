import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../../config";

export default () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);

  useEffect(() => {
    axios.get(`${base_url}/admin/user`).then(({ data }) => {
      if (data.length < 50) {
        setMore(true);
      } else {
        setPage((p) => p + 1);
      }
      setUsers(data);
    });
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`${base_url}/admin/user?id=${id}`);
    setUsers((u) => u.filter((x) => x.id !== id));
  };

  const loadMore = () => {
    axios.get(`${base_url}/admin/user?page=${page}`).then(({ data }) => {
      if (data.length < 50) {
        setMore(true);
      } else {
        setPage((p) => p + 1);
      }
      setUsers((u) => [...u, ...data]);
    });
  };

  return (
    <div className="admin-users">
      {users.length > 0 ? (
        <>
          {users.map((x) => (
            <div key={x.id} className="admin-user">
              <h3>{x.username}</h3>
              {x.img && <img src={`${base_url}/users/img/${x.img}`} />}
              <button onClick={() => deleteUser(x.id)}>Delete User</button>
            </div>
          ))}
          {!more && (
            <div className="load-more" onClick={loadMore}>
              Load more
            </div>
          )}
        </>
      ) : (
        <h2>No users</h2>
      )}
    </div>
  );
};
