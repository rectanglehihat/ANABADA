import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";


const Signup = (props) => {

    return(
    <React.Fragment>

      <Grid padding="0px 100px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              console.log('아이디 입력!!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
            console.log('닉네임 입력!!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
            console.log('비밀번호 입력!!');
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
            console.log('비밀번호 확인!!');
            }}
          />
        </Grid>

        <button>회원가입하기</button>

      </Grid>
    </React.Fragment>
    )
}

export default Signup;