import React from "react";
import { history } from "../redux/configureStore";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Image from "../elements/Image";
import Button from "../elements/Button";

import HeartButton from "./HeartButton";

import { useDispatch } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";


const Card = (props) => {
    const dispatch = useDispatch();
    console.log(props)

    return(
        <React.Fragment>

            <Grid padding="20px 100px" width="auto">

                <Grid padding="0 0 20px 0">
                    <Image shape="rectangle">{props.image}</Image>
                </Grid>

                <Grid is-flex padding="0 0 20px 0">
                    <Grid is_flex width="auto">
                        <Grid is_flex width="auto">
                            <Button width="auto" padding="5px" margin="0 4px 0 0" _onClick={() => 
                                {props.history.push(`/write/${props.id}`)}}>
                            수정</Button>

                            <Button width="auto" padding="5px"
                                _onClick={(e) => {
                                    //  이벤트 캡쳐링과 버블링을 막아요!
                                    // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
                                    e.preventDefault();
                                    e.stopPropagation();

                                    // 게시글 삭제하기
                                    // 여기에서는 window.confirm 등을 사용해서 진짜 지우냐고 한 번 더 물어봐주면 정말 좋겠죠!
                                    dispatch(cardActions.deletePostFB(props.id));
                                }}
                                >
                                삭제
                            </Button>
                        </Grid>
                        <Text>{props.date}</Text>
                    </Grid>
                    
                </Grid>

                <Grid is_flex padding="0 0 20px 0">
                    <Grid is_flex width="auto" >
                        <Text bold margin="0 20px 0 0">작성자</Text>
                        <Text >{props.nickname}</Text>
                    </Grid>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Grid is_flex width="auto" >
                        <Text bold margin="0 20px 0 0">타이틀</Text>
                        <Text >{props.title}</Text>
                    </Grid>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Grid is_flex width="auto" >
                        <Text bold margin="0 34px 0 0">가격</Text>
                        <Text >{props.price}</Text>
                    </Grid>
                </Grid>

                <Grid is_flex width="auto" padding="0 0 20px 0">
                    <Grid is_flex width="auto" >
                        <Text bold margin="0 20px 0 0">콘텐츠</Text>
                        <Text >{props.content}</Text>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Card.defaultProps = {
    // image_url:"https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    // user_name: "라푸",
    // title: "주인 팝니다",
    // contents: "말 안듣는 주인 바꿉니다",
    // price: "백마넌",
    // is_like: false,
    // like_cnt: 10,
    // is_me: false,
    // insert_dt: "2021-02-27 10:00:00",

    id: 1,
    image:"https://blog.kakaocdn.net/dn/qM9y8/btqU92Jmx90/DWzhLUYbCiz7PldqnIB1gK/img.jpg",
    nickname: "라푸",
    title: "주인 팝니다",
    content: "말 안듣는 주인 바꿉니다",
    price: "백마넌",
    date: "2021-02-27 10:00:00",
}


export default Card;