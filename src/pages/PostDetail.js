import React from "react";

import Button from "../elements/Button";

import Card from "../components/Card";
import CommentWrite from "../components/CommentWrite"
import CommentList from "../components/CommentList"


const PostDetail = (props) => {

    return(
        <React.Fragment>
            <Card/>
            <CommentWrite/>
            <CommentList/>
            <Button is_float text="+"></Button>
        </React.Fragment>
    )
}

export default PostDetail;