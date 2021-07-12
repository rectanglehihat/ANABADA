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
            <Button
                is_float
                _onClick={() => {
                    console.log("게시글 작성으로 가기");
                }}
                >
                +
            </Button>
            
        </React.Fragment>
    )
}

export default PostDetail;