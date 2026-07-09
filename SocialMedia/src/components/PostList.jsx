import Post from "./Post";
import {useContext} from "react";
import { PostListData } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";
const PostList=()=>{
  const {postList,fetchPosts} =useContext(PostListData);
   const handleOnClick=()=>{
        fetch("https://6a4f6ef5f45d5352b6116675.mockapi.io/posts")
          .then((res) => res.json())
          .then((data) => {
          
          fetchPosts(data);

  });
        }


  return <div className="body">
    {postList.length===0 &&<EmptyMessage  handleOnClick={handleOnClick}/>} 

    {postList.map((post)=><Post key={post.id} post={post}></Post>)}
      
      
  </div>
}

export default PostList;