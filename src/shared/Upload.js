import React from "react";
import Button from "../elements/Button";
import styled, { css } from "styled-components"

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";


const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const selectFile = (e) => {
    // e.target은 input. input이 가진 files 객체 확인
    console.log(e.target.files);
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);

    // 파일 리더 객체를 사용해서 미리보기 넣어주기
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    //파일객체 넘겨주기
    console.log(file)
    props.changeImage(file)

    // 파일 내용 읽어오기.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
      dispatch(imageActions.uploadImageDB(reader.result));
    };
  };

  // const uploadImageDB = (e) => {
    
  //   let files = fileInput.current.files[0];

  //   const formdata = new FormData();
  //   formdata.append('file', files)

  //   console.log(formdata)
  // }


  return (
    // <React.Fragment>
    //     <Label className="input-file-button" for="input-file">사진업로드</Label>
    //     <FileButton type="file" id="input-file" style={{display:"none"}} input={fileInput} onChange={selectFile}/>
    // </React.Fragment>
    <React.Fragment>
      <FileInput
        type="file"
        onChange={selectFile}
        ref={fileInput}
      />
    </React.Fragment>
  )
}

// const Label = styled.label`
//     font-size: 14px;
//     width: auto;
//     background-color: #212121;
//     color: #ffffff;
//     padding: 10px;
//     box-sizing: border-box;
//     border: none;
//     display: flex;
//     justify-content: center;
//     cursor: pointer;
// `;

// const FileButton = styled.input`
//     padding:5px;
// `;


const FileInput = styled.input`
    width: 100%;
    background-color: #02343F;
    color: #F0EDCC;
`;

export default Upload;