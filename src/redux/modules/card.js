import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";

//Actions
const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";
const SET_PREVIEW = "SET_PREVIEW";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

//createAction(Action Creators 대신 편하고 쉽게 만들기)
const setCard = createAction(SET_CARD, (card_list) => ({ card_list }));
const addCard = createAction(ADD_CARD, (card) => ({ card }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({ post_id, post }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));



const initialState = {
  list: [],
  //시작점, 다음거 넣을 null과 몇개씩 가져올지 size
  paging: { start: null, next: null, size: 3 },
  //지금 가져오는 중이니? 판별해줄 is_loading
  is_loading: false,
  preview: null,
};

//게시글 하나에 대한(기본적으로 들어가야 할)내용
const initialCard = {
  productId: 0,
  productImage: "https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
  name: "",
  title: "",
  content: "",
  price: "",
  createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
  // is_like: false,
  // like_cnt: 10,
  // is_me: false,
}

// middleware(비동기)
const getCardDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get('http://wanos.shop/api/product')
      // .get('http://localhost:4000/product')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        dispatch(setCard(res.data.result));

      }).catch(err => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("에러 났어!");
      })
  };

};

// 카드를 하나 추가할 때, 들어가야할(필요한) 데이터를 파라미터로 넣어주기
// 이 값들은 카드를 추가하는 곳인 PostWrite에도 동일하게 들어가야함
const addCardDB = (name, title, content, price, productImage) => {
  return function (dispatch, getState, { history }) {
    // const _card = {
    //     ...initialCard,
    //     name: name,
    //     title: title,
    //     content: content,
    //     price: price,
    //     productImage: productImage,
    // }
    // console.log({_card})
    // name과 createAt밖에 나오지 않음
    // postWrite에 파라미터가 동일하게 들어가 있지 않아서 그랬던 것.
    // return

    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('price', price);
    formData.append('image', productImage);
    for (let key of formData.keys()) { console.log(key); }
    for (var value of formData.values()) { console.log(value); }

    // now upload
    const headers = {
      "Content-Type": "multipart/form-data",
      // "Access-Control-Allow-Origin": "*",
    };

    // axios
    //   .post('http://wanos.shop/api/product/post',
    //   formData,
    //   {headers: headers }
    //   )

    axios({
      method: 'post',
      url: 'http://wanos.shop/api/product/post',
      data: formData,
      headers: { headers },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const new_post = {
          title: res.data.title,
          content: res.data.content,
          price: res.data.price,
          image: res.data.pruductImage,
          // createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        }
        dispatch(addCard(new_post));

        history.replace("/post");
        // window.location.reload("/post");
      }).catch(err => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("포스트 작성에 실패했습니다!");
      })
  }
}

//28:31
const editPostDB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {

    if (!post_id) {
      console.log("게시물 정보가 없어요!");
      return;
    }

    const _image = getState.image.preview;

    const _post_idx = getState().post.list.findIndex(p => p.id === post_id);
    const _post = getState().post.list[_post_idx];
    console.log(_post);

    axios
      .post(` http://wanos.shop/api/product/edit/${productId}`)
      .then((res) => {
        dispatch(editPost(post_id, post));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (_image === _post.image_url) {

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
  [SET_CARD]: (state, action) => {
    return produce(state, (draft) => {
      draft.list.push(...action.payload.card_list)
    })
  },
  [ADD_CARD]: (state, action) => produce(state, (draft) => {
    //배열의 제일 앞에 붙이니까 unshift사용
    draft.list.unshift(action.payload.card);
  }),
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;
  }),
  [EDIT_POST]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
    draft.list[idx] = { ...draft.list[idx], ...action.payload.post }
  }),
  [DELETE_POST]: (state, action) => {
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
  addCardDB,
  setPreview,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
};
export { actionCreators }