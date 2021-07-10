import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Image from "../elements/Image";

import Upload from "../shared/Upload";


const PostWrite = (props) => {

    return (
        <React.Fragment>

            <Grid padding="0px 100px">
                <Grid center>
                    <Text 
                        size="32px" 
                        bold 
                        margin="20px 0px" 
                        border="#222831 solid"
                        bw="0px 0px 10px 0px"
                    >상 품 작 성</Text>
                </Grid>
                
                <Grid padding="0 0 20px 0">
                    <Upload/>
                </Grid>
                
                <Grid padding="0 0 20px 0">
                    <Image
                    shape="rectangle"
                    src={"http://via.placeholder.com/400x300"}
                    />
                </Grid>

                <Grid padding="10px 0px">
                    <Input label="타이틀"></Input>
                </Grid>

                <Grid padding="10px 0px">
                    <Input label="가격"></Input>
                </Grid>

                <Grid padding="10px 0px">
                <Input 
                    label="내용" 
                    multiLine/>
                </Grid>

                <Grid padding="10px 0px 30px 0">
                    <Button padding="16px">게시글 등록</Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}


export default PostWrite;