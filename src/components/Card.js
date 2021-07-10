import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";

import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";


const Card = (props) => {

    return(
        <React.Fragment>
            <Grid padding="0px 100px">
                <Grid>
                    <div>이미지 영역</div>
                </Grid>

                <Grid is_flex>
                    <Text bold>작성자</Text>
                    <Text >라푸</Text>
                </Grid>

                <Grid is_flex width="auto">
                    <Text bold>타이틀</Text>
                    <Text >주인 팝니다</Text>
                </Grid>

                <Grid is_flex width="auto">
                    <Text bold>가격</Text>
                    <Text >백마넌</Text>
                </Grid>

                <Grid is_flex width="auto">
                    <Text bold>콘텐츠</Text>
                    <Text >말 안듣는 주인님 바꾸려구요</Text>
                </Grid>

                <Grid padding="16px 0px" is_flex>
                    <Grid is_flex width="auto">
                        <div>하트</div>
                        <div>하트개수</div>
                    </Grid>
                    <div>보고있는 사람</div>
                </Grid>

                <Grid>
                    <CommentWrite/>
                </Grid>

                <Grid>
                    <CommentList/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Card;