import React from "react";
import styled from "styled-components";


const Image = (props) => {
    const {shape, src, size, margin} = props;

    const styles = {
        src: src,
        size: size,
        margin: margin,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "centerCircle"){
        return (
            <CenterCircle {...styles}></CenterCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://pbs.twimg.com/media/DVFVcN0UQAAC3SY.jpg:large",
    size: 36,
    margin: false,

}

//정사각형 이미지 스타일
const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

//사각형 4:3이미지 아우터(비율 일정하게 하려고)
const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

//사각형 4:3이미지 이너
const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

//원형 이미지 스타일
const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

const CenterCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: auto;
`;

export default Image;