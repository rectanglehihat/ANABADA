import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as cardActions } from "../redux/modules/card";


const PostWrite = (props) => {
    const dispatch = useDispatch();
    // const is_login = useSelector((state) => state.user.is_login);
    // const preview = useSelector((state) => state.image.preview);
    const card_list = useSelector((state) => state.card.list);

    const card_id = props.match.params.id;
    const is_edit = card_id ? true : false;

    // console.log(card_id)

    const { history } = props;

    let _card = is_edit ? card_list.find((p) => p.id === card_id) : null;

    const [contents, setContents] = React.useState(_card ? _card.contents : "");
    const [title, setTitle] = React.useState(_card ? _card.title : "");
    const [price, setPrice] = React.useState(_card ? _card.price : "");

    const changeContents = (e) => {
        setContents(e.target.value);
        // console.log(e.target.value)
    }
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changePrice = (e) => {
        setPrice(e.target.value);
    }

    const addCard = () => {
        dispatch(cardActions.addCardDB(contents));
      };

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
                    <Input 
                    label="타이틀"
                    value={title}
                    _onChange={changeTitle}
                    ></Input>
                </Grid>

                <Grid padding="10px 0px">
                    <Input 
                    label="가격"
                    value={price}
                    _onChange={changePrice}
                    ></Input>
                </Grid>

                <Grid padding="10px 0px">
                <Input 
                    label="내용" 
                    multiLine
                    value={contents}
                    _onChange={changeContents}
                    />
                </Grid>

                <Grid padding="10px 0px 30px 0">
                    <Button 
                    padding="16px"
                    _onClick={addCard}
                    >게시글 등록</Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default PostWrite;