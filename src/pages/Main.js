import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";

const Main = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Button 
                    _onClick={() => {
                    console.log("게시글 작성으로 가기");
                    props.history.push("/post")
                }}>물건사기</Button>
                <Button
                    _onClick={() => {
                    console.log("게시글 작성으로 가기");
                    props.history.push("/write")
                }}
                >물건팔기</Button>
            </Grid>
        </React.Fragment>
    );
}

export default Main;