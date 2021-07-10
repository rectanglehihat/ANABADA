import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";


const Card = (props) => {

    return(
        <React.Fragment>
            <Grid padding="16px 0px" is_flex>
                <Input placeholder="댓글로 거래하세요:)"/>
                <Button width="50px" margin="0px 2px">작성</Button>
            </Grid>
        </React.Fragment>
    )
}

export default Card;