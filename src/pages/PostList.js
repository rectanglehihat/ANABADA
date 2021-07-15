import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as cardActions } from "../redux/modules/card";

import Button from "../elements/Button"
import Grid from "../elements/Grid";
import Card from "../components/Card";


const PostList = (props) => {
    const dispatch = useDispatch();
    const card_list = useSelector((state) => state.card.list)

    React.useEffect(() => {

        // 게시물이 있으면 새로 불러오지 않음(getCardDB 하지 않음). 기존 리덕스 자료 제일 앞에 추가됨.
        // if(card_list === 0) {
        // }
        dispatch(cardActions.getCardDB());

    }, [])

    return (
        <React.Fragment>
            <Grid>
                {/* c는 게시글에 대한 모든 정보 들어감 */}
                {card_list.map((c, idx) => {
                    console.log(c);
                    return <Card key={c.id} {...c} productImage={'http://wanos.shop/' + c.productImage} />
                })}
            </Grid>

            <Button
                is_float
                _onClick={() => {
                    // console.log("게시글 작성으로 가기");
                    props.history.push("/write")
                }}
            >
                +
            </Button>
        </React.Fragment>
    )
}

export default PostList;