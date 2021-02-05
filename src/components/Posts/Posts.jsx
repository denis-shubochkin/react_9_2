import { useEffect, useState } from 'react';
import {BrowserRouter as Router ,NavLink, Route, Switch} from 'react-router-dom';
import Post from './Post/Post';
import './Posts.css';

export default function Posts(props) {
    const {sendParams} = props;
    const [posts,setPosts] = useState([]);

    useEffect(() => {
      try
      {
        fetch(process.env.REACT_APP_POSTS_URL)
        .then(response => response.json())
        .then(data => setPosts(data));
      }
      catch (e) {
        console.log(e)
      }
    },[])

    const getParams = (id,content) => {
      sendParams(id,content);
    }

    return(
        <>
        <div className="Header">
          <NavLink to="/posts/new" className="PostCreateBtn">Создать пост</NavLink>
        </div>
        <div className="Posts">
          {posts.length > 0 ? posts.map(el => <Post key={el.id} data={el} sendParams={getParams}/>) : null}
        </div>
        </>
    )
}