import React from "react";

import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Text from "../elements/Text";

import Card from "../components/Card";
import CommentWrite from "../components/CommentWrite"
import CommentList from "../components/CommentList"


const PostDetail = (props) => {
    return (
        <React.Fragment>
            <Grid padding="0px 100px" center>
                <Text
                    size="32px"
                    bold
                    margin="20px 0px"
                    border="#222831 solid "
                    bw="0px 0px 10px 0px"
                >상 품 상 세</Text>
            </Grid>
            <Card />
            <CommentWrite />
            <CommentList />
            <Button
                is_float
                _onClick={() => {
                    console.log("게시글 작성으로 가기");
                    props.history.push("/write")
                }}
            >+
            </Button>
        </React.Fragment >
    )
}

export default PostDetail;