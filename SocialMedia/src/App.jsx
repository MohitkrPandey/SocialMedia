import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Siderbar"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import {useState} from "react";
import PostListProvider from "./store/post-list-store"
function App() {
const [selectedTab,setSelectedTab] =useState("Home");

const changeTab=(tabName)=>{
      setSelectedTab(tabName);
}
  return (
    <PostListProvider>
    <div className="app-container">
     <Sidebar selectedTab={selectedTab} changeTab={changeTab}></Sidebar>
     <div className="content">
        <Header></Header>
        {selectedTab=="Home" && <PostList/>}
        {selectedTab=="Create Post" && <CreatePost/>}      
        <Footer></Footer>
      
     </div>
    
    </div>
    </PostListProvider>
  )
}

export default App
