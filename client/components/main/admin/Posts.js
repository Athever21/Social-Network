import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../../config";

export default () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);

  useEffect(() => {
    axios.get(`${base_url}/admin/post`).then(({ data }) => {
      if (data.length < 20) {
        setMore(true);
      } else {
        setPage((p) => p + 1);
      }
      setPosts(data);
    });
  }, []);

  const deletePost = async (id) => {
    await axios.delete(`${base_url}/admin/post?id=${id}`);
    setPosts((p) => p.filter((x) => x.id !== id));
  };

  const loadMore = async () => {
    axios.get(`${base_url}/admin/post?page=${page}`).then(({ data }) => {
      if (data.length < 20) {
        setMore(true);
      } else {
        setPage((p) => p + 1);
      }
      setPosts((p) => [...p, data]);
    });
  };

  return (
    <div className="admin-posts">
      {posts.length > 0 ? (
        <>
          {posts.map((x) => (
            <div
              key={x.id}
              className={`admin-post ${x.files.length > 0 ? "with-img" : ""}`}
            >
              <p className="author">{x.author.username}</p>
              <p className="message">{x.message}</p>
              <div className="images">
                {x.files.map((y) => (
                  <img key={y} src={`${base_url}/posts/img/${y}`} />
                ))}
              </div>
              <button onClick={() => deletePost(x.id)}>Delete post</button>
            </div>
          ))}
          {!more && (
            <div className="load-more" onClick={loadMore}>
              Load more
            </div>
          )}
        </>
      ) : (
        <h2>No posts</h2>
      )}
    </div>
  );
};
