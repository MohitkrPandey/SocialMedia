import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Siderbar"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
function App() {


  return (
    <div className="app-container">
     <Sidebar></Sidebar>
     <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>

     </div>
    
    </div>
  )
}

export default App
