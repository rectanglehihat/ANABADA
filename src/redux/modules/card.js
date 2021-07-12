import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";


//Actions
const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";


//createAction(Action Creators 대신 편하고 쉽게 만들기)
const setCard = createAction(SET_CARD, (card_list) => ({card_list}));
const addCard = createAction(ADD_CARD, (card) => ({card}));


//리듀서가 사용할 initialState
const initialState = {
    list: [],
}
//게시글 하나에 대한(기본적으로 들어가야 할)내용
const initialCard = {
    id: 0,
    image_url:"https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    user_name: "라푸",
    title: "주인 팝니다",
    contents: "말 안듣는 주인 바꿉니다",
    price: "백마넌",
    is_like: false,
    like_cnt: 10,
    is_me: false,
    insert_dt: "2021-02-27 10:00:00",
}

//middleware(비동기)
// const cardDB = (/products/:id) => {
//     return function (dispatch, getState, {history}) {
//       axios
//         .get((), {

//         })
//     }


//handleActions(리듀서 대신 편하게 만들기)
export default handleActions({
    [SET_CARD]: (state, action) => produce(state, (draft) => {

    }),

    [ADD_CARD]: (state, action) => produce(state, (draft) => {
        //배열에 제일 앞에 붙이니까 unshift사용
        draft.list.unshift(action.payload.post);
    }),


}, initialState)


//묶어주고 export
const actionCreators = {
    setCard,
    addCard,
  };
  
export { actionCreators };