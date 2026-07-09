import {useContext} from "react";
import { PostListData } from "../store/post-list-store";

const EmptyMessage=({handleOnClick})=>{

  return <>
       

        <div class="px-4 py-5 my-5 text-center">  <h1 class="display-5 fw-bold text-body-emphasis">Welcome!</h1> <div class="col-lg-6 mx-auto"> <p class="lead mb-4">This project is a React learning demo focused on building a responsive user interface. The application currently includes a Home page and a Create Post page. To explore it, you can fetch sample posts from a dummy API using the Fetch Posts button, or create your own post from the Create Post option in the sidebar. Enjoy exploring the UI!</p> <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> <button  onClick={handleOnClick} type="button" class="btn btn-primary btn-lg px-4 gap-3">Fetch Posts</button> </div> </div> </div>
  
  
  </>


}

export default EmptyMessage;