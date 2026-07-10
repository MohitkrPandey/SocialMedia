import { createContext, useReducer,useCallback } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetchPosts: ()=>{},
  incrementReaction:()=>{},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
   
    newPostList = [action.payload, ...currPostList];
  }
  
  else if(action.type=="FETCH_POSTS"){
    if(newPostList.length===0){
    newPostList=action.payload;}
  }
  else if (action.type == "DELETE_POST") {
   
      newPostList = currPostList.filter((it)=>it.id!==action.payload.itemId);
    
  }

  else if(action.type=="INCREMENT_REACTION"){
      newPostList=currPostList.map((it)=>it.id===action.payload.itemId?{...it,reactions:it.reactions+1}:it)
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    [],
  );

  const addPost = (userId, title, body,reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reactions,
        tags,
        userId,
      },
    });
  };

  const fetchPosts =(data)=>{
     dispatchPostList({
      type:"FETCH_POSTS",
      payload:data,
     })
  }

  const deletePost = useCallback((itemId) => {
    dispatchPostList({
        type:"DELETE_POST",
        payload:{
          itemId,
        }
    })

  },[dispatchPostList]);

  const incrementReaction=(itemId)=>{
    dispatchPostList({
      type:"INCREMENT_REACTION",
      payload:{itemId,

      },
    })
  }

  return (
    <PostListData.Provider value={{ postList, addPost,fetchPosts, deletePost ,incrementReaction}}>
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Mumbai for vacations. Hope to enjoy a lot . Peace out",
    reactions: 8,
    userID: "user-9",
    tags:["mumbai","travel"]
  },
  {
    id: "2",
    title: "Pass hogye bhai",
    body: "4 saal ki masti ke baad bhi hogye hai pass hard to believe.",
    reactions: 15,
    userID: "user-12",
    tags: ["garduating", "unbelievable"],
  },
];

export default PostListProvider;
