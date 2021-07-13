// 미리보기 이미지 넣기
// post에 한 번에 해도 괜찮지만 이렇게 따로 만들수도 있음
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const SET_PREVIEW = "SET_PREVIEW";

// createAction(Action Creators 대신 편하고 쉽게 만들기)
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// 리듀서가 사용할 initialState
const initialState = {
  preview: null,
};

// handleActions(리듀서 대신 편하게 만들기)
export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {

        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  setPreview,
};

export { actionCreators };