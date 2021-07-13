import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";

//Actions
const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";

const EDIT_POST = "EDIT_CARD";

const DELETE_POST = "DELETE_POST";

//createAction(Action Creators 대신 편하고 쉽게 만들기)
const setCard = createAction(SET_CARD, (card_list) => ({ card_list }));
const addCard = createAction(ADD_CARD, (card) => ({ card }));

const editPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }))

const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));


//리듀서가 사용할 initialState
// const initialState = {
//   list: [],
// }

const initialState = {
  list: [],
  //시작점, 다음거 넣을 null과 몇개씩 가져올지 size
  paging: { start: null, next: null, size: 3 },
  //지금 가져오는 중이니? 판별해줄 is_loading
  is_loading: false,
};

//게시글 하나에 대한(기본적으로 들어가야 할)내용
const initialCard = {
  id: 0,
  image_url: "https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
  user_name: "라푸",
  title: "주인 팝니다",
  contents: "말 안듣는 주인 바꿉니다",
  price: "백마넌",
  is_like: false,
  like_cnt: 10,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  // is_me: false,
}

// middleware(비동기)
const getCardDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get('http://localhost:4000/products')
      .then((res) => {
        console.log(res);
        //   let card_list = [];

        let _card = res.data;
        //   let card = {
        //       id: res.id,
        //       user_name: _card.nickname,
        //       contents: _card.content,
        //       image_url: _card.image,
        //       price: _card.price,
        //       title: _card.title,
        //       insert_dt: _card.date,
        //   }

        //   card_list.push(_card);

        console.log(_card);

        dispatch(setCard(_card));
        console.log(res.data);
      });
  };
};

const editPostDB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시물 정보가 없어요!");
      return;
    }
    // 프리뷰 이미지를 가져옵니다.
    const _image = getState().image.preview;

    // 수정하려는 게시글이 게시글 목록에서 몇 번째에 있나 확인합니다.
    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);

    // 수정하려는 게시글 정보를 가져옵니다. (수정 전 정보)
    const _post = getState().post.list[_post_idx];

    console.log(_post);

    const postDB = (post_id = null, post = {}) => {
      return function (dispatch, getState, { history }) {
        axios
          .post(`http://localhost:4000/products/${post_id}`)
          .then((res) => {
            dispatch(editPost(post_id, post));
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }




  }
}


const deletePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://wanos.shop/api/product/delete/${id}`)
      .then((res) => {
        dispatch(deletePost(id));
        // history.replace("/post");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // dispatch(deletePost(id));
    // history.replace("/post");
  }
}

//handleActions(리듀서 대신 편하게 만들기)
export default handleActions({
  [SET_CARD]: (state, action) => produce(state, (draft) => {
    draft.list.push(...action.payload.card_list)
  }),

  [ADD_CARD]: (state, action) => produce(state, (draft) => {
    //배열에 제일 앞에 붙이니까 unshift사용
    draft.list.unshift(action.payload.post);
  }),
  [EDIT_POST]: (state, action) =>
    produce(state, (draft) => {
      // 배열의 몇 번째에 있는 지 찾습니다.
      let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

      // 해당 위치에 넣어줍니다.
      draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
    }),
  [DELETE_POST]: (state, action) => {
    console.log("사랑해여 민영쌤");
    return produce(state, (draft) => {
      let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
      console.log(idx);

      if (idx !== -1) {
        // 배열에서 idx 위치의 요소 1개를 지웁니다.
        draft.list.splice(idx, 1);
      }
    })
  },
},
  initialState
);


//묶어주고 export
const actionCreators = {
  setCard,
  addCard,
  getCardDB,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
};

export { actionCreators };