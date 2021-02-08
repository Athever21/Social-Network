import React, { useEffect, useState,useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import axios from "axios";
import { base_url } from "../../../config";

export default () => {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);

  useEffect(() => {
    const loadMore = async () => {
      const d = document.documentElement;
      if (d.scrollTop + d.clientHeight === d.scrollHeight) {
        if (!more) {
          const { data } = await axios.get(
            `${base_url}/posts/user/${user.id}?page=${page+1}`
          );
          console.log(`${base_url}/posts/user/${user.id}?page=${page+1}`)
          console.log(data);
          if (data.length < 5) {
            setMore(true);
          }
          console.log(page);
          setPage((p) => p + 1);
          dispatch({
            type: "ADD_POSTS",
            data,
          });
        }
      }
    };

    window.addEventListener("scroll", loadMore);

    return () => {
      window.removeEventListener("scroll", loadMore);
    };
  }, [page]);

  return (
    <div>
      {posts.map((x) => (
        <Post p={x} key={x.id} list={true} />
      ))}
    </div>
  );
};
