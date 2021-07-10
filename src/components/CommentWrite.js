import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";


const Card = (props) => {

    return(
        <React.Fragment>
            <Grid padding="16px 0px" is_flex>
                <Input label="댓글등록" placeholder="댓글로 거래하세요:)">댓글 등록(로그인시에만 보이도록)</Input>
                <button>작성</button>
            </Grid>
        </React.Fragment>
    )
}

export default Card;