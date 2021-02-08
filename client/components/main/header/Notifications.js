import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";
import { base_url } from "../../../config";

export default ({ controls }) => {
  const [notifs, setNotifs] = useState([]);
  const socket = useSelector((state) => state.socket);
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.user);
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);
  const [deleted,setDeleted] = useState(false);
  const history = useHistory();

  const reciveNotif = (notif, from) => {
    const f = JSON.parse(from);
    const recivedNotif = JSON.parse(notif);
    recivedNotif.from = f;

    setNotifs((n) => [recivedNotif, ...n]);
    setCount((c) => c + 1);
  };

  const loadNotifs = (init = false) => {
    axios.get(`${base_url}/notif?page=${page}`).then(({ data }) => {
      setNotifs((n) => [...n, ...data.notifs]);
      if (init) {
        setCount((c) => c + data.count);
      }
      setPage((p) => p + 1);
      if (data.notifs.length != 10) {
        setMore(true);
      }
    });
  };

  useEffect(() => {
    loadNotifs(true);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("reciveNotif", reciveNotif);

      return () => {
        socket.off("reciveNotif", reciveNotif);
      };
    }
  }, [socket]);

  const display = () => {
    controls.setShowNotif(true);
  };

  const remove = async (id, read) => {
    await axios.delete(`${base_url}/notif/${id}`);
    if (!read) {
      setCount((c) => c - 1);
    }
    setDeleted(true);
    setNotifs((n) => n.filter((x) => x.id !== id));
  };

  const addFriend = async (x) => {
    await axios.post(`${base_url}/friends`, {
      user1: x.from.id,
      user2: x.to,
    });
    socket.emit(
      "addedFriend",
      x.from.username,
      user.username,
      JSON.stringify(x.from),
      JSON.stringify(user)
    );
    remove(x.id, x.read);
  };

  const read = async(x) => {
    if(!x.read) {
      const index = notifs.findIndex(y => y.id === x.id);
      await axios.patch(`${base_url}/notif/${x.id}/`);
      const arr = notifs;
      arr[index].read = true;
      setNotifs(arr);
      setCount(c => c-1);
    }
  };

  const goToPost = (target,id) => {
    if(target.classList[0] === "delete") return;
    history.push(`/post/${id}`);
    controls.setShowNotif(false);
  }

  return (
    <div className="notif">
      <img
        onClick={display}
        className="icon"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMzAzMDMwO3N0cm9rZS13aWR0aDowLjc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojMzAzMDMwO30KPC9zdHlsZT48ZyBjbGFzcz0ic3QwIiBpZD0iUGFkZGluZ19feDI2X19BcnRib2FyZCIvPjxnIGlkPSJJY29ucyI+PGc+PHBhdGggY2xhc3M9InN0MiIgZD0iTTI1LjUwOTU5LDE0LjgwOTY5YzAuMzM3MzQsMC4wMjUxMiwwLjY0Nzk4LDAuMDI1MzcsMC44MjQ1NywwLjMzODIzICAgIGMwLjAzNDUyLDAuMDYxMTYsMC42NjY3MSwwLjYxNTc2LDAuNjUwOTYsMC42MTU3N2MtMC4wMDM0OCwwLTEuNzI4MzYsMC0xLjcyODM2LDBsLTAuMzU4MTMsMC4zMTE0MmwxLjU3MzkyLDAuOTQwMTUgICAgYy0wLjM0MjU2LDAuMDkzNDMtMS4yNDY5MywwLjM4MzM4LTEuMjQ2OTMsMC4zODMzOGwtMC44NzE5NywwLjY1Mzk4TDIzLjc3NSwxOC44Nzc4NmwwLjg0MzM1LDAuNjIyODMgICAgYzAsMCwwLjk4MDk2LDAuNzQ3NCwxLjAyNzY4LDAuNzc4NTRjMC4wNDY3MSwwLjAzMTE0LDAuMjQ5MTMtMC42MjI4MywwLjI0OTEzLTAuNjIyODMgICAgYy0wLjAyMDc2LTAuNTAzNDctMC4wNDE1Mi0xLjAwNjkzLTAuMDYyMzEtMS41MTA0YzAuMTU1NzEsMC4wNTE5NCwwLjMxMTQzLDAuMTAzODIsMC40NjcxNSwwLjE1NTczbDAuNjg1MTItMC4wNjIyOCAgICBjMCwwLDAuNjg1MTIsMC41Mjk0MSwwLjc2Mjk3LDAuNTkxNjljMC4wNzc4NSwwLjA2MjI4LDAuMzg5MjcsMC43MzE4MywwLjM4OTI3LDAuNzMxODMgICAgYy0wLjAwOTUsMC4xMDQ3LTAuMDgyNzYsMC42NzY5MSwwLjA1MDM5LDAuNjk3OTJjMC4wMjU4NCwwLjAwNDA4LDAuMDUxMy0wLjAwNzUsMC4wNzQ4Mi0wLjAxODkyICAgIGMwLjIzNTk5LTAuMTE0NjIsMC40NjExMS0wLjI0ODUyLDAuNjg2NjctMC4zODIxYzAuMTA2NzMtMC4wNjMyLDAuMzM1NDItMC4yNjU3NSwwLjQ2NDkzLTAuMjY1NzUgICAgYzAuMDQ2NzEsMC0wLjIwMjQyLDAuNTYwNTUtMC4yMzM1NiwwLjYwNzI2cy0wLjk2NTM5LDEuNjAzOC0wLjk2NTM5LDEuNjAzOGwtMC45NjUzOSwwLjk4MDk2bDAuMjgwMjgsMC40ODI3bC0wLjc2Mjk3LDAuOTAzMTEgICAgbC0wLjgyNTI2LDAuNzMxODNjMCwwLTAuNzk0MTEsMC4xODY4NS0wLjg0MDgzLDAuMTg2ODVzLTAuNjM4NDEsMC4xNDAxNC0wLjYzODQxLDAuMTQwMTRzLTEuMTIxMS0wLjEwOS0xLjI3NjgxLDAuNDgyNyAgICBjLTAuMTU1NzEsMC41OTE2OSwwLjI5NTg1LDEuNDk0OCwwLjM1ODEzLDEuNjgxNjVjMC4wNjIyOCwwLjE4Njg1LTAuNDgyNywwLjczMTgzLTAuNTI5NDEsMC43NjI5NyAgICBjLTAuMDQ2NzEsMC4wMzExNC0xLjA1ODgyLTAuNTI5NDEtMS4yMzAxLTAuNjA3MjZzLTAuNTYwNTUtMS4zMzkwOS0wLjU2MDU1LTEuMzM5MDlsLTAuMzczNy0wLjM1ODEzICAgIGMwLDAtMC44NTY0LTAuNjM4NDEtMC45MzQyNS0wLjY2OTU1cy0wLjIzMzU2LTEuMjMwMS0wLjI4MzQ0LTEuMzM5MDlzLTAuMzg2MTEtMC40NTE1Ni0wLjQ3OTUzLTAuNTEzODQgICAgYy0wLjA5MzQyLTAuMDYyMjgtMC4xNDAxNC0xLjEyMTEtMC4xNDAxNC0xLjEyMTFzMC4wNDY3MS0wLjYwNzI2LDAuMzU4MTMtMS4wNTg4MnMwLjI5NTg1LTEuMjMwMSwwLjIwMjQyLTEuMzg1ODEgICAgcy0wLjcwMzk4LDAuMDcwMDEtMC43MDM5OCwwLjA3MDAxcy0wLjQ3MjItMC4yMzQxOS0wLjUxODkxLTAuMjAzMDVsLTAuMzE1ODYtMC41ODY1OWMwLDAtMS44ODExNi0wLjEzMzc4LTEuODUwMDItMC4xODA0OSAgICBjMCwwLDIuOTk2NTYtNC43NjkyLDkuMjE2MTYtNC4wNTU1OUgyNS41MDk1OXoiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjYuMzkwOTIsMjYuNjYxNzljLTAuMDMzMDMtMC4wNDk1NSwwLjE2NTE2LTAuMjY0MjUsMC4xNjUxNi0wLjI2NDI1czEuNTY5LTAuMjMxMjIsMS43MTc2NS0wLjIxNDcxICAgIGMwLjE0ODY0LDAuMDE2NTIsMC4zOTYzOCwwLjQ3ODk2LDAuMzk2MzgsMC40Nzg5NnMtMC41NDUwMiwwLjcxMDE4LTAuNzI2NywwLjcxMDE4Yy0wLjE4MTY3LDAtMS4xMzk1OS0wLjA5OTEtMS4xMzk1OS0wLjA5OTEgICAgTDI2LjM5MDkyLDI2LjY2MTc5eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMi40NTIyMiwyOC4xOTc3NmMwLjE2MDA2LTAuMjg4OTUtMC44OTE4Ni0wLjAxNjUyLTAuODkxODYtMC4wMTY1MmwtMS4yMjIxNywwLjAzMzAzbC0xLjE4OTE0LDAuMTE1NjEgICAgbC0xLjA5MDA0LDAuNjQ0MTJsMC4yNjQyNSwwLjUyODUxYzAsMC0wLjg1ODgyLDAuOTc0NDMtMS4wMjM5OCwxLjIwNTY1Yy0wLjE2NTE2LDAuMjMxMjItMC43MTAxOCwwLjY3NzE1LTAuNzc2MjQsMC43NTk3MyAgICBjLTAuMDY2MDYsMC4wODI1OCwwLjE0ODY0LDAuNTExOTksMS4wMDU2MSwwLjg5MTg1QzI3LjUyODY1LDMyLjM1OTc1LDMwLjA0MDE3LDMyLjU1MjEsMzIuNDUyMjIsMjguMTk3NzZ6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTI0LjU3NzgxLDI4LjM5MzNjLTAuMDQwNDEtMC4wOTA5MywwLjE1NzM0LTAuMzYxODgsMC4xODg4LTAuNTAzNDhzLTAuMDE1NzMtMC41NjM2OCwwLjA3ODY3LTAuNTE3ODUgICAgYzAuMDk0NCwwLjA0NTg0LDAuMjk4OTQtMC4wNzczLDAuNTAzNDgsMGMwLjIwNDU0LDAuMDc3MywwLjUxOTIxLDAuMjM0NjQsMC41ODIxNSwwLjM2MDUxczAuMjIwMjcsMC40MDkwOCwwLjM5MzM0LDAuNTE5MjEgICAgYzAuMTczMDcsMC4xMTAxNCwwLjQ4Nzc1LDAuMjM2MDEsMC40NzIwMSwwLjQ0MDU0Yy0wLjAxNTczLDAuMjA0NTQsMC4yMzYwMSwwLjQ3MjAxLDAuMjM2MDEsMC40NzIwMWwwLjE4ODgsMC4yNTE3NCAgICBjMCwwLTAuMTg4OCwwLjA3ODY3LTAuMzc3NjEsMC4xNzMwN3MtMC40MjQ3OSwwLjE3MzA3LTAuNDU2MjcsMC4xMTAxNGMtMC4wMzE0OC0wLjA2MjkzLTAuMTczMDgtMC4xNTczNC0wLjQyNDgyLTAuMzQ2MTQgICAgcy0wLjU4MjE1LTAuMzYxODgtMC43NTUyMi0wLjQ0MDU0UzI0LjY0MDc1LDI4LjUzNDksMjQuNTc3ODEsMjguMzkzM3oiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzAuMjA2MDgsMjQuNjMyOTRjMC4yMzYwMS0wLjAxNTczLDEuNDY3NjUtMC4wOTQ0LDEuNjA5MjUtMC4xMjU4NyAgICBjMC4xNDE2MS0wLjAzMTQ3LTAuMzc3NjEsMC42NjA4Mi0wLjQwOTA4LDAuNzcwOTVzLTAuNTY2NDEsMC42NjA4Mi0wLjU2NjQxLDAuNjYwODJsLTAuODgxMDksMC4xMTAxNEwzMC4yMDYwOCwyNC42MzI5NHoiLz48Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIyNCIgY3k9IjI0IiByPSIxMC42OTUiLz48L2c+PC9nPjwvc3ZnPg=="
      />
      <div className="notif-counter">{count}</div>
      {controls.showNotif && (
        <div className="notif-display">
          {notifs.length > 0 ? (
            notifs.map((x) => {
              switch (x.type) {
                case "FRIEND":
                  return (
                    <div
                      className={`add-to-friend ${!x.read ? "highlight-notif" : ""}`}
                      key={x.id}
                      onMouseEnter={() => read(x)}
                    >
                      <img
                        src={
                          x.from.img
                            ? `${base_url}/users/img/${x.from.img}`
                            : "/dist/77111.webp"
                        }
                      />
                      <div className="info">
                        <p>Friend request from {x.from.username}</p>
                        <button className="accept" onClick={() => addFriend(x)}>
                          Accept
                        </button>
                      </div>
                      <div
                        className="delete"
                        onClick={() => remove(x.id, x.read)}
                      >
                        X
                      </div>
                    </div>
                  );
                case "LIKE_POST":
                  return (
                    <div
                      className={`liked-post ${!x.read ? "highlight-notif" : ""}`}
                      key={x.id}
                      onMouseEnter={() => read(x)}
                      onClick={({target}) => goToPost(target,x.post)}
                    >
                      <img
                        src={
                          x.from.img
                            ? `${base_url}/users/img/${x.from.img}`
                            : "/dist/77111.webp"
                        }
                      />
                      <div className="info">
                        <p>{x.from.username} liked your post</p>
                      </div>
                      <div
                        className="delete"
                        onClick={() => remove(x.id, x.read)}
                      >
                        X
                      </div>
                    </div>
                  );
                case "COMMENT":
                  return (
                    <div
                      className={`added-comment ${!x.read ? "highlight-notif" : ""}`}
                      key={x.id}
                      onMouseEnter={() => read(x)}
                      onClick={({target}) => goToPost(target,x.post)}
                    >
                      <img
                        src={
                          x.from.img
                            ? `${base_url}/users/img/${x.from.img}`
                            : "/dist/77111.webp"
                        }
                      />
                      <div className="info">
                        <p>{x.from.username} commented your post</p>
                      </div>
                      <div
                        className="delete"
                        onClick={() => remove(x.id, x.read)}
                      >
                        X
                      </div>
                    </div>
                  );
                default:
                  return "";
              }
            })
          ) : (
            <h2>No notifications</h2>
          )}
          {((notifs.length >= 10 || deleted) && !more) && (
            <p className="load-more" onClick={() => loadNotifs()}>
              Load more
            </p>
          )}
        </div>
      )}
    </div>
  );
};
