import React,{useState} from 'react';
import "./Posts.scss";

import AddPost from './AddPost';
import ListPosts from './ListPosts';

export default () => {
  return(
    <div className="post-container">
      <AddPost />
      <ListPosts />
    </div>
  )
}