import Post from "./Post";
import {useContext} from "react";
import { PostListData } from "../store/post-list-store";
const PostList=()=>{

const {postList}=useContext(PostListData);
  return <div className="body">
    {postList.map((post)=><Post key={post.id} post={post}></Post>)}
      
      
  </div>
}

export default PostList;