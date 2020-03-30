import { connect } from "react-redux";
import Posts from "./Posts";
import {
  createNewPostCreator,
  updateNewPostMessageCreator
} from "../../reducers/posts-reducer";

let mapStateToProps = state => {
  return { postsPage: state.postsPage };
};

let mapDispatchToProps = dispatch => {
  return {
    createNewPost: () => {
      dispatch(createNewPostCreator());
    },
    updateNewPostMessage: body => {
      dispatch(updateNewPostMessageCreator(body));
    }
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
