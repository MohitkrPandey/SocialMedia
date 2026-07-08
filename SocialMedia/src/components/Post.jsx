import { AiFillDelete } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";



import { useContext } from "react";
import { PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost, incrementReaction } = useContext(PostListData);
  const onClickHandler = () => {
    deletePost(post.id);
  };

  const reactionHandler=()=>{
    incrementReaction(post.id);
  }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              onClick={onClickHandler}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ cursor: "pointer" }}
            >
              <AiFillDelete />
            </span>
          </h5>

          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary">
              {tag}
            </span>
          ))}
  
          <div
            className="alert alert-primary d-flex align-items-center gap-2"
            role="alert"
          >
            <span>{post.reactions} people have  liked your post!</span>
            <AiOutlineLike />  
            
          </div>

          <button class="btn btn-primary" type="button" onClick={reactionHandler}><BiLike />

</button>

        </div>
      </div>
    </>
  );
};

export default Post;
