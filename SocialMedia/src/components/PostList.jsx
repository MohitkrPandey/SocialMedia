import LoadingSpinner from "./LoadingSpinner";
import Post from "./Post";
import {useContext , useEffect,useState} from "react";
import { PostListData } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";
const PostList=()=>{
  const [fetching ,setFetching]= useState(false);
  const {postList,fetchPosts} =useContext(PostListData);
  const controller =new AbortController();
  const signal =controller.signal;
   useEffect(()=>{
        setFetching(true);
        fetch("https://6a4f6ef5f45d5352b6116675.mockapi.io/posts" ,{signal})
          .then((res) => res.json())
          .then((data) => {
          
          fetchPosts(data);
        setFetching(false);

        return ()=>{
            controller.abort();
        }
  });
        } ,[])



  return <div className="body">
    {fetching && <LoadingSpinner/>}
    {!fetching && postList.length===0 &&<EmptyMessage />} 

    {!fetching && postList.map((post)=><Post key={post.id} post={post}></Post>)}
      
      
  </div>
}

export default PostList;