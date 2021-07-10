import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";


const Card = (props) => {

    return(
        <React.Fragment>
            <Grid padding="0px 100px">
                <Grid padding="16px 0px" is_flex>
                    <Input 
                    placeholder="댓글로 거래하세요:)"
                    _onChange={(e) => {
                        console.log('댓글 입력!!')}}
                    />
                    <Button width="50px" margin="0px 2px" padding="13px 0">작성</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Card;