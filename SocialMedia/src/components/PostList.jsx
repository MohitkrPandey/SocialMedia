import LoadingSpinner from "./LoadingSpinner";
import Post from "./Post";
import {useContext} from "react";
import { PostListData } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";
const PostList=()=>{
  
  const {postList,fetching} =useContext(PostListData);
  

  return <div className="body">
    {fetching && <LoadingSpinner/>}
    {!fetching && postList.length===0 &&<EmptyMessage />} 

    {!fetching && postList.map((post)=><Post key={post.id} post={post}></Post>)}
      
      
  </div>
}

export default PostList;