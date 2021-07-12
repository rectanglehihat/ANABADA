// // debounce & throttle
// // callback의 횟수를 줄여줌(효과적으로 제어)

// // debounce: 새로운 이벤트(onChange의 input같은거)가 들어오면 거기서부터 1초를 다시 기다리는게 debounce.
// // 계속 그렇게 미루다가 마지막 이벤트(입력)가 진행된 후에 우리가 지정한 일정시간이 지나면 그때가서 실행.
// // 마지막 이벤트로부터 일정시간을 기다렸다가 하는거
// // (ex. 연관검색어)

// // throttle 모아서 주기적으로 한번 실행: 1초동안 있었던 이벤트 중에 가장 최근거는 api요청을 함(ex.스크롤 게이지)

// import React from "react";
// import _ from "lodash";
// // lodash의 _안에 debounce와 throttle 들어있음

// const Search = () => {

//     const [text, setText] = React.useState("");
//     // debounce와 throttle을 함수형에서 state받아다가 사용하면 초기화돼서 제대로 작동 안함 
//     //useCallback: 함수를 메모이제이션(어디에 저장해둠).
//     // 컴포넌트가 리랜더링 되더라도 함수를 초기화하지마라. 내가 저장한 친구(메모이제이션한 친구) 계속 쓸거야라고 해주는 것
//     const keyPress = React.useCallback(debounce, []);

//     // debounce 사용하기: "일정시간(1000) 기다렸다가 이 행동(()=>{})을 해!" 만들기
//     const debounce = _.debounce((e) => { console.log(e.target.value); }, 1000)

//     const throttle = _.throttle((e) => {
//         console.log(e.target.value);
//     }, 1000);

//     const onChange = (e) => {
//         console.log(e.target.value);
//         setText(e.target.value);
//         keyPress(e);
//     }


//     return (
//         <div>
//             {/* 상황따라 onChange에 debounce나 throttle 넣기 */}
//             <input type="text" onChange={throttle} value={text} />
//         </div>
//     );
// }

// export default Search