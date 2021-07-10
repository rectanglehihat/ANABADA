import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Image from "../elements/Image";


const CommentList = (props) => {

    return(
        <React.Fragment>
            <Grid padding="0px 100px">
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
                <Image>유저이미지</Image>
                <Text bold>{user_name}</Text>
                <Text  margin="10px">{contents}</Text>
            </Grid>

            <Grid is_flex width="auto">
                <Text margin="4px">{insert_dt}</Text>
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
    contents: "이보시오",
    insert_dt: "2021-01-01 19:00:00",
}