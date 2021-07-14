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
import { actionCreators as imageActions } from "../redux/modules/image";


// 게시글 수정과 작성을 이 컴포넌트 하나로!
const PostWrite = (props) => {
    const dispatch = useDispatch();
    // const is_login = useSelector((state) => state.user.is_login);
    const preview = useSelector((state) => state.image.preview);
    const card_list = useSelector((state) => state.card.list);

    const card_id = props.match.params.id;
    // console.log(props) //params가 없어...!
    const is_edit = card_id ? true : false;
    // console.log(card_id)

    const { history } = props;

    // 수정모드라면 게시글 정보 가져오기
    let _card = is_edit ? card_list.find((c) => c.id === card_id) : null;
    // console.log(_card)
    

    // useState를 사용해서 텍스트 내용 저장
    const [content, setContent] = React.useState(_card ? _card.content : "");
    // console.log(contents)  아무것도 없어...!
    const [title, setTitle] = React.useState(_card ? _card.title : "");
    const [price, setPrice] = React.useState(_card ? _card.price : "");
    const [image, setImage] = React.useState(_card ? _card.image : "");

    // 내용 바꿔주는 함수
    const changeContents = (e) => {
        setContent(e.target.value);
        // console.log(e.target.value)
    }
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changePrice = (e) => {
        setPrice(e.target.value);
    }

    const changeImage = (file) => {
        setImage(file);
        console.log(file)
    }
    // 게시글 추가 함수(card모듈에서 addCardDB부분의 파라미터가 동일하게 들어옴)
    const addCard = () => {

        dispatch(cardActions.addCardDB(
            "user_name", 
            title, 
            content, 
            price,
            image,
        ));
      };
 
    // 게시글 수정 함수
    const editPost = () => {
    dispatch(cardActions.editPostFB(card_id, { content: content }));
        };

    React.useEffect(() => {
    // 수정모드인데 게시글 정보 없으면 경고를 띄우고 뒤로 가기
    if (is_edit && !_card) {
        window.alert("포스트 정보가 없어요!");
        history.goBack();

        return;
    }
    // 수정모드라면 이미지 미리보기도 하나 넣어주기
    if (is_edit) {
        dispatch(imageActions.setPreview(_card.image_url));
      }
    }, []);

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
                    >{is_edit ? "상 품 수 정" : "상 품 작 성"}</Text>
                </Grid>
                
                <Grid padding="0 0 20px 0">
                    <Upload changeImage={changeImage}/>
                </Grid>
                
                <Grid padding="0 0 20px 0">
                    <Image
                    shape="rectangle"
                    src={preview? preview : "http://via.placeholder.com/400x300"}
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
                    value={content}
                    _onChange={changeContents}
                    />
                </Grid>

                <Grid padding="10px 0px 30px 0">
                    {is_edit ? (
                        <Button 
                        padding="16px"
                        // _onClick={editPost}
                        >게시글 수정</Button>
                    ) : (
                        <Button 
                        padding="16px"
                        _onClick={addCard}
                        >게시글 등록</Button>
                        )}
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default PostWrite;