import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import { actionCreators as imageActions } from "./image";
import axios from "axios";





//게시글 삭제하기


// const deleteComment = () => {
//     axios
//     .delete(`http://localhost:3000/api/posts/${postId}`, {
//     })
//     .then((res) => {
//       console.log(res)
//     });
//     dispatch(postActions.getpostDB());
//     window.location.reload()
// }


const actionCreators = {
    deletePostDB,
};

export { actionCreators };
