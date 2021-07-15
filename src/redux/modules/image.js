// 미리보기 이미지 넣기
// post에 한 번에 해도 괜찮지만 이렇게 따로 만들수도 있음
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

// createAction(Action Creators 대신 편하고 쉽게 만들기)
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// 리듀서가 사용할 initialState
const initialState = {
  image_url: "http://via.placeholder.com/400x300",
  uploading: false,
  preview: null,
};

//DB
const uploadImageDB = (image) => {
  return function (dispatch, getState, {history}) {

    dispatch(uploading(true));

  };
}

// handleActions(리듀서 대신 편하게 만들기)
export default handleActions({
  [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
    draft.image_url = action.payload.image_url;
    draft.uploading = false;
  }),

  [UPLOADING]: (state, action) => produce(state, (draft) => {
    draft.uploading = action.payload.uploading;
  }),

  
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;
  }),
  },initialState
);

const actionCreators = {
  uploadImage,
  uploadImageDB,
  setPreview,
};

export { actionCreators };