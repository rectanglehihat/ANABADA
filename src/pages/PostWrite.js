import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";


const PostWrite = (props) => {

    return (
        <React.Fragment>

            <Grid padding="0px 100px">
                <Grid>
                    <Text size="32px" bold>게시글 작성</Text>
                </Grid>
                
                <Grid padding="16px 0px">
                    <button>사진업로드 버튼</button>
                </Grid>
                
                <Grid padding="16px 0px">
                    <div>이미지 미리보기 영역</div>
                </Grid>

                <Grid padding="16px 0px">
                    <Input label="타이틀"></Input>
                </Grid>

                <Grid padding="16px 0px">
                    <Input label="가격"></Input>
                </Grid>

                <Grid padding="16px 0px">
                <Input 
                    label="내용" 
                    multiLine/>
                </Grid>

                <Grid padding="16px 0px">
                    <button>게시글 등록</button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}


export default PostWrite;