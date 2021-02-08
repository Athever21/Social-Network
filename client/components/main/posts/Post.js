import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import axios from "axios";
import { Link } from "react-router-dom";

import { base_url } from "../../../config";

export default ({ p, list }) => {
  const [post, setPost] = useState(p);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const user = useSelector((state) => state.user);
  const socket = useSelector((state) => state.socket);
  const [currImage, setCurrImage] = useState(0);
  const imgNum = p.files.length - 1;
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${base_url}/comments/post/${post.id}`).then(({ data }) => {
      setPage((p) => p + 1);
      setComments(data);
    });
  }, []);

  const postComment = async (e) => {
    if (e.keyCode === 13 && message !== "") {
      const { data } = await axios.post(`${base_url}/comments/`, {
        message,
        author: user.id,
        post: post.id,
      });
      if (post.author.id !== user.id) {
        const res = await axios.post(`${base_url}/notif`, {
          type: "COMMENT",
          from: user.id,
          to: post.author.id,
          post: post.id,
        });
        socket.emit(
          "addNotif",
          JSON.stringify(res.data),
          post.author.username,
          JSON.stringify(user)
        );
      }
      setMessage("");
      setComments((c) => [{ ...data, author: user }, ...c]);
    }
  };

  const likePost = async () => {
    const { data } = await axios.patch(`${base_url}/posts/${post.id}`);
    if (data.liked && data.post.author.id !== user.id) {
      const res = await axios.post(`${base_url}/notif`, {
        type: "LIKE_POST",
        to: post.author.id,
        from: user.id,
        post: post.id,
      });
      console.log(post);
      socket.emit(
        "addNotif",
        JSON.stringify(res.data),
        post.author.username,
        JSON.stringify(user)
      );
    }

    setPost(data.post);
  };

  const prevImage = ({ target }) => {
    const curr = target.parentElement.querySelector(
      `[data-img='${currImage}']`
    );
    let next;
    if (currImage > 0) {
      next = target.parentElement.querySelector(
        `[data-img='${currImage - 1}']`
      );
      setCurrImage((c) => c - 1);
    } else if (currImage === 0) {
      next = target.parentElement.querySelector(`[data-img='${imgNum}']`);
      setCurrImage((c) => imgNum);
    }

    next.style.transition = "none";
    next.style.left = "100%";

    setTimeout(() => {
      curr.style.transition = "left 0.7s ease-in";
      next.style.transition = "left 0.7s ease-in";
      next.style.left = "0";
      curr.style.left = "-100%";
    }, 0);
  };

  const nextImage = ({ target }) => {
    const curr = target.parentElement.querySelector(
      `[data-img='${currImage}']`
    );
    let next;
    if (currImage < imgNum) {
      next = target.parentElement.querySelector(
        `[data-img='${currImage + 1}']`
      );
      setCurrImage((c) => c + 1);
    } else if (currImage === imgNum) {
      next = target.parentElement.querySelector(`[data-img='${0}']`);
      setCurrImage(0);
    }

    next.style.transition = "none";
    next.style.left = "-100%";

    setTimeout(() => {
      curr.style.transition = "left 0.7s ease-in";
      next.style.transition = "left 0.7s ease-in";
      next.style.left = "0";
      curr.style.left = "100%";
    }, 0);
  };

  const loadMore = async () => {
    const { data } = await axios.get(
      `${base_url}/comments/post/${post.id}?page=${page}`
    );
    if (data.length < 20) {
      setMore(true);
    }
    setPage((p) => p + 1);
    setComments((c) => [...c, ...data]);
  };

  const deletePost = async () => {
    await axios.delete(`${base_url}/posts/${post.id}`);
    dispatch({
      type: "DELETE_POST",
      data: {
        id: post.id,
      },
    });
  };

  const removeComment = async (id) => {
    await axios.delete(`${base_url}/comments/${id}`);
    setComments((c) => c.filter((x) => x.id !== id));
  };

  return (
    <div className="post">
      {post.author.username === user.username && (
        <div className="delete-post" onClick={deletePost}>
          x
        </div>
      )}
      <Link to={`/user/${post.author.username}`}>
        <div className="author">
          <img
            src={
              post.author.img
                ? `${base_url}/users/img/${post.author.img}`
                : "/dist/77111.webp"
            }
          />
          <div>
            <h3>{post.author.username}</h3>
            <p>{dayjs(post.createdAt).format("DD-MM-YYYY HH:mm:ss")}</p>
          </div>
        </div>
      </Link>
      {list ? (
        <Link to={`/post/${post.id}`}>
          <div className="message">{post.message}</div>
        </Link>
      ) : (
        <div className="message">{post.message}</div>
      )}
      <div className="images">
        {post.files.length != 0 ? (
          post.files.length > 1 ? (
            <>
              <div className="prev control" onClick={prevImage}>
                {"<"}
              </div>
              <div className="next control" onClick={nextImage}>
                {">"}
              </div>
              {post.files.map((x, i) => {
                return (
                  <img
                    key={x}
                    src={`${base_url}/posts/img/${x}`}
                    className={i === 0 ? "" : "left"}
                    data-img={i}
                  />
                );
              })}
            </>
          ) : (
            <img src={`${base_url}/posts/img/${post.files[0]}`} />
          )
        ) : (
          ""
        )}
      </div>
      <div className="likes">
        <p className="count">{post.likes} likes</p>
        <button onClick={likePost}>Like</button>
      </div>
      <div className="comments-area">
        <div className="comments">
          {comments.length > 0 ? (
            <>
              {comments.map((x) => {
                return (
                  <div className="comment" key={x.id}>
                    {x.author.id === user.id && (
                      <div
                        className="remove-comment"
                        onClick={() => removeComment(x.id)}
                      >
                        x
                      </div>
                    )}
                    <img
                      src={
                        x.author.img
                          ? `${base_url}/users/img/${post.author.img}`
                          : "/dist/77111.webp"
                      }
                    />
                    <div>
                      <h3>{x.author.username}</h3>
                      <p>{x.message}</p>
                    </div>
                  </div>
                );
              })}
              {comments.length % 20 === 0 && !more && (
                <div className="load-more" onClick={loadMore}>
                  Load more
                </div>
              )}
            </>
          ) : (
            <p className="no-comments">No comments for this post</p>
          )}
        </div>
        <div className="add-comment">
          <img
            src={
              user.img
                ? `${base_url}/users/img/${user.img}`
                : "/dist/77111.webp"
            }
          />
          <input
            type="text"
            onKeyUp={postComment}
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </div>
      </div>
    </div>
  );
};
