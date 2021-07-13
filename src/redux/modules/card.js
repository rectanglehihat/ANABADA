import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";


//Actions
const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";
const SET_PREVIEW = "SET_PREVIEW";


//createAction(Action Creators 대신 편하고 쉽게 만들기)
const setCard = createAction(SET_CARD, (card_list) => ({card_list}));
const addCard = createAction(ADD_CARD, (card) => ({card}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

//리듀서가 사용할 initialState
const initialState = {
    list: [],
    preview: null,
}
//게시글 하나에 대한(기본적으로 들어가야 할)내용
const initialCard = {
    id: 0,
    image:"https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    nickname: "라푸",
    title: "주인 팝니다",
    content: "말 안듣는 주인 바꿉니다",
    price: "백마넌",
    date: moment().format("YYYY-MM-DD hh:mm:ss"),
    // is_like: false,
    // like_cnt: 10,
    // is_me: false,
}

// middleware(비동기)
const getCardDB = () => {
    return function (dispatch, getState, { history }) {
    axios
        .get('http://localhost:4000/product')
        .then((res) => {
            console.log(res);

            let _card = res.data;
            console.log(_card);

            dispatch(setCard(_card));
            console.log(res.data);
        });
    };
  };

const addCardDB = (title, content, image, nickname, price) => {
    return function (dispatch, getState, { history }) {
    axios
        .post('http://localhost:4000/product',
            {title, content, image, nickname, price},
            // {headers:{}}
        )
        .then((res) => {
            console.log(res);

            let _card = res.data;
            console.log(_card);

            dispatch(addCard(_card));
            console.log(res.data);
            history.replace("/post");
        });
    }
}

//handleActions(리듀서 대신 편하게 만들기)
export default handleActions({
    [SET_CARD]: (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.card_list)
    }),

    [ADD_CARD]: (state, action) => produce(state, (draft) => {
        //배열에 제일 앞에 붙이니까 unshift사용
        draft.list.unshift(action.payload.card);
    }),

    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),


}, initialState)


//묶어주고 export
const actionCreators = {
    setCard,
    addCard,
    getCardDB,
    addCardDB,
    setPreview,
  };
  
export { actionCreators };