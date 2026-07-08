import {useRef,useContext} from 'react';
import { PostListData } from '../store/post-list-store';




const CreatePost=()=>{
  const {addPost} = useContext(PostListData);

  const userIdInput =useRef();
  const titleInput = useRef();
  const bodyInput = useRef();
  
  const tagInput=useRef();

  const submitHandler=(event)=>{
    event.preventDefault();
    const userId=userIdInput.current.value;
    const title=titleInput.current.value;
    const body=bodyInput.current.value;
    const tags=tagInput.current.value.split(' ');


    userIdInput.current.value="";
    titleInput.current.value="";
    bodyInput.current.value="";
    tagInput.current.value="";

    addPost(userId,title,body,0,tags);
  }

  return <>
  <form className="form" onSubmit={submitHandler}>
  <div className="mb-3">
    <label htmlFor="user" className="form-label">Enter Your User Id here</label>
    <input type="text" className="form-control" id="user" placeholder="Your User Id" ref={userIdInput}/>

  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder="How are you feeling today..." ref={titleInput}/>
    
  </div>

<div className="mb-3">
    <label htmlFor="content" className="form-label">Post Content</label>
    <textarea  rows="6" className="form-control" id="content" placeholder="Tell us more about it" ref={bodyInput} />

  </div>





<div className="mb-3">
    <label htmlFor="hash" className="form-label">Enter your tags here</label>
    <input type="text" className="form-control" id="hash" placeholder="Please enter tags using spaces"
    ref={tagInput}/>

  </div>


  
  
  <button type="submit" className="btn btn-primary">Post</button>
</form> 
  
  </>
}

export default CreatePost;