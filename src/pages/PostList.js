import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {actionCreators as cardActions} from "../redux/modules/card";

import Button from "../elements/Button"
import Grid from "../elements/Grid";
import Card from "../components/Card";


const PostList = (props) => {
    const dispatch = useDispatch();
    const card_list = useSelector((state) => state.card.list)

    console.log(card_list)

    React.useEffect(() => {
        dispatch(cardActions.getCardDB());

        
    }, [])

    return (
        <React.Fragment>
            <Grid>
                {/* c는 게시글에 대한 모든 정보 들어감 */}
                {card_list.map((c, idx) => {
                    return <Card key={c.id} {...c}/>
                })}
            </Grid>

            <Button
                is_float
                _onClick={() => {
                    console.log("게시글 작성으로 가기");
                }}
                >
                +
            </Button>
        </React.Fragment>
    )
}

export default PostList;