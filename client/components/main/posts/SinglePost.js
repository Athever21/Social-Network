import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {base_url} from '../../../config';

import Post from './Post';

export default () => {
  const [post,setPost] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios.get(`${base_url}/posts/${id}`)
      .then(({data}) => {
        setPost(data);
      })
  },[])

  return(
    <div className="single-post">
      {(post.id) ? <Post p={post} list={false}/> : <h2>Post not found</h2>}
    </div>
  )
}