import React from "react";
import styled from "styled-components";

import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Text from "../elements/Text";


const NotFound = (props) => {
    console.log(props);

    return (
        <Wrapper>
            <Grid padding="18px">
                <Text size="36px" bold>주소가 올바르지 않아요!</Text>
            </Grid>

            <Button
                width="28em"
                _onClick={() => { props.history.goBack(); }}
            >뒤로가기</Button>
        </Wrapper>
    )

};

const Wrapper = styled.div`
    padding: 10em;
    text-align: center;
`;

export default NotFound;