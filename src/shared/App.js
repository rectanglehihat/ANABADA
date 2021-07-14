import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import NotFound from "./NotFound";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite"
import PostDetail from "../pages/PostDetail";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Header from "../components/Header";

import GlobalStyles from "./GlobalStyles";
import Main from "../pages/Main";


function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={PostWrite} />
          {/* 게시글 하나 상세 페이지 /url파라미터로 몇번째 상세에 와 있는지 파악 */}
          <Route path="/post/:id" exact component={PostDetail} />
          {/* 게시글 모두 나오는 전체 페이지 */}
          <Route path="/post" exact component={PostList} />
          {/* 없는 페이지 처리하려면 Switch로 감싼 다음에 라우트로 path를 넘겨주지 않으면
            path가 지정되지 않은 모든 주소는 NotFound로 빠짐 */}
          <Route render={(props) => (
            <NotFound history={props.history} />
          )} />

        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}


export default App;