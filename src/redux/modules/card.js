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
const editPost = createAction(EDIT_POST, (id, post) => ({ id, post }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));



const initialState = {
  list: [],
  //시작점, 다음거 넣을 null과 몇개씩 가져올지 size
  paging: { start: null, next: null, size: 3 },
  //지금 가져오는 중이니? 판별해줄 is_loading
  is_loading: false,
  preview: null,
  title: "",
  price: "",
  content: "",
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

    axios({
      method: 'post',
      url: 'http://wanos.shop/api/product/post',
      data: formData,
      headers: { headers },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        // 서버에서 데이터 전체 내려주면 res.data.~하면 되지만
        // 전체 데이터를 내려주지 않으면 파라미터값을 그대로 가져오고
        // 이미지를 도메인 주소+res.data.~로 넣어줘야 한다.
        console.log(res.data.result.productImage);
        const new_card = {
          id: res.data.result.productId,
          name,
          title,
          content,
          price,
          //이미지 주소 넣는 방법
          productImage: res.data.result.productImage
          // 이미지 'http://wanos.shop/' + 
          // 전체 데이터 내려받을때에 한가지(e.g.이미지)만 빼내기 위해선 위의내용 제하기

          // createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        }
        dispatch(addCard(new_card));

        history.replace("/post");
        // window.location.reload("");
      }).catch(err => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("상품게시물을 저장하지 못했습니다.");
        window.alert("상품게시물을 저장하지 못했습니다.")
      })
  }
}

//28:31
const editPostDB = (productId = null, title, content, price, productImage, card = {}) => {
  return function (dispatch, getState, { history }) {
    if (!productId) {
      console.log("게시물 정보가 없어요!");
      return;
    }

    console.log(productId, title, content, price, productImage, card);
    const _image = getState().image.preview;
    const _post_idx = getState().card.list.findIndex(p => p.id === productId);
    const _post = getState().card.list[_post_idx];
    console.log(_post)

    let _edit = {
      title,
      content,
      price,
      productImage,
    };
    console.log(_edit);

    const headers = {
      "Content-Type": "multipart/form-data",
    }

    const formData = new FormData();
    // formData.append('name', name);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('price', price);
    formData.append('image', productImage);
    for (let key of formData.keys()) { console.log(key); }
    for (var value of formData.values()) { console.log(value); }

    axios({
      method: 'PUT',
      url: `http://wanos.shop/api/product/edit/${productId}`,
      data: formData,
      headers: { headers },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const new_post = {
          title,
          content,
          price,
          productImage: res.data.productImage,
          // createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        }
        dispatch(editPost(productId, new_post));
        history.replace("/post");
        // window.location.reload("/post");
      }).catch(err => {
        // 요청이 정상적으로 끝나지 않았을 때(오류 났을 때) 수행할 작업!
        console.log("포스트 작성에 실패했습니다!");
      })

    axios({
      method: "PUT",
      url: `http://wanos.shop/api/product/edit/${productId}`,
      data: {
        ..._edit,
        // imgUrl: url,
      },
      headers: { headers }
    })
      .then((res) => {
        let new_post_data = {
          title,
          content,
          price,
          productImage,
        };
        console.log(new_post_data)
        // dispatch(editPost(new_post_data, post_id, post));
        window.alert("수정 되었습니다!");
      })
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

const getOnePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://wanos.shop/api/product/${id}`,
    })
      .then((res) => {
        console.log(res.data);
        const onePost = res.data.post;
        console.log(onePost);
        dispatch(getCardDB(onePost));
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };
};

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
    let idx = draft.list.findIndex((p) => p.id === action.payload.id);
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
  getOnePostDB,
  addCardDB,
  setPreview,
  editPost,
  editPostDB,
  deletePost,
  deletePostDB,
};
export { actionCreators }