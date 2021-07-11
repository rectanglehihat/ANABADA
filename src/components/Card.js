import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Image from "../elements/Image"

import HeartButton from "./HeartButton";


const Card = (props) => {

    return(
        <React.Fragment>
            <Grid padding="0px 100px">
                <Grid center>
                    <Text 
                    size="32px" 
                    bold 
                    margin="20px 0px" 
                    border="#222831 solid "
                    bw="0px 0px 10px 0px"
                    >상 품 상 세</Text>
                </Grid>

                <Grid padding="0 0 20px 0">
                    <Image shape="rectangle">{props.image_url}</Image>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Text bold width="100px">작성자</Text>
                    <Text >{props.user_name}</Text>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Text bold>타이틀</Text>
                    <Text >{props.title}</Text>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Text bold>가격</Text>
                    <Text >{props.price}</Text>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Text bold>콘텐츠</Text>
                    <Text >{props.contents}</Text>
                </Grid>

                <Grid is_flex>
                    <Grid is_flex width="auto">
                        <HeartButton />
                        <Text size="12px">{props.like_cnt}개</Text>
                    </Grid>
                    <Image >보고있는 사람</Image>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

    Card.defaultProps = {
    image_url:"https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    user_name: "라푸",
    title: "주인 팝니다",
    contents: "말 안듣는 주인 바꿉니다",
    price: "백마넌",
    is_like: false,
    like_cnt: 10,
    is_me: false,
    insert_dt: "2021-02-27 10:00:00",
}

export default Card;