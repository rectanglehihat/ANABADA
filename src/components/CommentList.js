import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";


const CommentList = (props) => {

    return(
        <React.Fragment>
            <Grid>
                <CommentItem/>
            </Grid>
        </React.Fragment>
    )
}

CommentList.defaultProps = {
    post_id: null,
  };

export default CommentList;


const CommentItem = (props) => {

    const { user_profile, user_name, user_id, post_id, insert_dt, contents } = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <div>유저이미지</div>
                <Text margin="5px">닉네임</Text>
                <Text>댓글내용</Text>
            </Grid>

            <Grid is_flex width="auto">
                <Text margin="5px">작성시간</Text>
                <Text hover>X</Text>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "mangsu",
    user_id: "",
    post_id: 1,
    contents: "나도 피거내",
    insert_dt: "2021-01-01 19:00:00",
}