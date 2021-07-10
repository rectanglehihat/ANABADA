import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Image from "../elements/Image"

import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";


const Card = (props) => {

    return(
        <React.Fragment>
            <Grid padding="0px 100px">
                <Grid center>
                    <Text 
                    size="20px" 
                    bold 
                    margin="20px 0px" 
                    border="#222831 solid "
                    bw="0px 0px 10px 0px"
                    >상품 작성</Text>
                </Grid>

                <Grid>
                    <Image shape="rectangle">이미지 영역</Image>
                </Grid>

                <Grid is_flex width="auto">
                    <Text bold width="100px">작성자</Text>
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

                <Grid is_flex>
                    <Grid is_flex width="auto">
                        <Text size="30px" margin="0px">♡</Text>
                        <Text size="12px">{props.like_cnt}개</Text>
                    </Grid>
                    <Image>보고있는 사람</Image>
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

    Card.defaultProps = {
    user_info: {
        user_name: "누구",
        user_profile: "https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    },
    image_url:"https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    contents: "어후 피곤해! 어흐↗ 어흐으↗",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
    is_me: false,
    like_cnt: 10,
    is_like: false,
}

export default Card;