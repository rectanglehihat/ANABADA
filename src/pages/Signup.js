import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Image from "../elements/Image"
import Upload from "../shared/Upload"


const Signup = (props) => {

    return(
    <React.Fragment>

      <Grid padding="0px 100px">
        <Grid center>
          <Text 
            size="32px" 
            bold 
            margin="20px 0px" 
            border="#222831 solid "
            bw="0px 0px 10px 0px"
            >회 원 가 입</Text>
        </Grid>

        <Image 
        shape="centerCircle" 
        size="150" 
        src="https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
        margin="0px auto"
        />

        <Grid center padding="20px 0px">
          <Upload/>
        </Grid>
       
        <Grid padding="20px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              console.log('아이디 입력!!');
            }}
          />
        </Grid>

        <Grid padding="10px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
            console.log('닉네임 입력!!');
            }}
          />
        </Grid>

        <Grid padding="10px 0px">
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
            console.log('비밀번호 입력!!');
            }}
          />
        </Grid>

        <Grid padding="10px 0px">
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
            console.log('비밀번호 확인!!');
            }}
          />
        </Grid>

        <Button padding="16px" margin="24px 0px">회원가입하기</Button>
      </Grid>
      
    </React.Fragment>
    )
}

export default Signup;