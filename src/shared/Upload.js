import React from "react";
import Button from "../elements/Button";
import styled from "styled-components"


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