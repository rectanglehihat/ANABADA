import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import styled from "styled-components";

import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite"
import PostDetail from "../pages/PostDetail";

import GlobalStyles from "./GlobalStyles";


function App() {
  return (
    <React.Fragment>
        <GlobalStyles />
        <BrowserRouter>
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/post" exact component={PostDetail} />
        </BrowserRouter>
    </React.Fragment>
  );
}


export default App;