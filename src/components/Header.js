import React from "react";
import { history } from "../redux/configureStore";

import Grid from "../elements/Grid";
import Text from "../elements/Text";

import Button from '@material-ui/core/Button';
// import Button from "../elements/Button";
import { useHistory } from 'react-router-dom';


const Header = (props) => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Grid is_flex padding="10px 100px">
                <Grid>
                    <Text
                        margin="0px"
                        size="30px"
                        bold
                        _onClick={() => { history.push("/") }}>
                        아나바다
                    </Text>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        console.log("피드로 가기");
                        history.push("/post")
                    }}>사기</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        console.log("게시글 작성으로 가기");
                        history.push("/write")
                    }}
                    style={{ margin: "0 0 0 15px" }}
                >팔기</Button>
            </Grid>
        </React.Fragment>
    );
};

export default Header;