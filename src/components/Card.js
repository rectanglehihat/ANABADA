//그 카드 하나하나!
import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Image from "../elements/Image";
import Button from "../elements/Button";

import HeartButton from "./HeartButton";

import { useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/card";


//컴퍼넌트가 React.memo()로 래핑 될 때, React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다.
//그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.
const Card = React.memo((props) => {
    const dispatch = useDispatch();
    return (
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
                    <Button>수정하기</Button>
                    <Button _onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(postActions.deletePostDB(props.id));
                    }}>삭제하기</Button>
                </Grid>

                <Grid padding="0 0 20px 0">
                    <Image shape="rectangle">{props.image}</Image>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Text bold width="100px">작성자</Text>
                    <Text >{props.nickname}</Text>
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
                        <Text size="12px">{props.like}개</Text>
                    </Grid>
                    <Image >보고있는 사람</Image>
                </Grid>
            </Grid>
        </React.Fragment>
    )
})

Card.defaultProps = {
    image_url: "https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
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