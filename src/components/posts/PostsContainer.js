import { connect } from "react-redux";
import Posts from "./Posts";
import {
  createNewPost,
  updateNewPostMessage
} from "../../reducers/posts-reducer";

let mapStateToProps = state => {
  return { postsPage: state.postsPage };
};

const PostsContainer = connect(mapStateToProps, {
  createNewPost,
  updateNewPostMessage
})(Posts);

export default PostsContainer;
