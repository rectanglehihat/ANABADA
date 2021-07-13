import React from "react";
import Button from "../elements/Button";
import styled from "styled-components"


const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.
    console.log(e.target.files);
    // 선택한 파일이 어떻게 저장되어 있나 봅시다.
    console.log(e.target.files[0]);

    // ref로도 확인해봅시다. :)
    // console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = e.target.files[0];

    // 파일 내용을 읽어옵니다.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러예요! :)
    reader.onloadend = () => {
      // reader.result는 파일의 컨텐츠(내용물)입니다!
      console.log(reader.result);
    };
  };


const Upload = (props) => {
    return (
        <React.Fragment>
            <Label className="input-file-button" for="input-file">사진업로드</Label>
            <FileButton type="file" id="input-file" style={{display:"none"}}/>
        </React.Fragment>
    )
}

const Label = styled.label`
    font-size: 14px;
    width: auto;
    background-color: #212121;
    color: #ffffff;
    padding: 16px;
    box-sizing: border-box;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;


const FileButton = styled.input`

`;

export default Upload;