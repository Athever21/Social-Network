import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import chatsReducer from "./reducers/chatsReducer";
import socketReducer from "./reducers/socketReducer";
import postsReducer from "./reducers/postsReducer";

const combined = combineReducers({
  user: userReducer,
  chats: chatsReducer,
  socket: socketReducer,
  posts: postsReducer,
});

export default createStore(combined, applyMiddleware(thunk));
