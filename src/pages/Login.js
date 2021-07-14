import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";

import { emailCheck } from "../shared/common";

const Login = () => {
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");

    const login = () => {
        if (id === "" || pwd === "") {
            window.alert("아이디 혹은 비밀번호가 공란입니다. 입력해주세요.");
            return;
        }

        // id가 이메일 형식이 맞나 확인
        if (!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다.");
            return;
        }

        // // 파이어베이스 로그인을 담당하는 함수를 디스패치했어요.
        // dispatch(userActions.loginFB(id, pwd));
    };

    return (
        <React.Fragment>
            <Grid padding="0px 100px">
            <Grid center>
                <Text 
                    size="32px" 
                    bold 
                    margin="20px 0px" 
                    border="#222831 solid "
                    bw="0px 0px 10px 0px"
                    >로 그 인</Text>
            </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="이메일"
                        placeholder="이메일을 입력해주세요."
                        _onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                </Grid>

                <Grid padding="16px 0px">
                    <Input
                        label="패스워드"
                        placeholder="패스워드 입력해주세요."
                        type="password"
                        _onChange={(e) => {
                            setPwd(e.target.value);
                        }}
                        value={pwd}
                        is_submit
                        onSubmit={login}
                    />
                </Grid>

                <Button
                    _onClick={() => {
                        login();
                    }}
                >
                    로그인하기
                </Button>
            </Grid>
        </React.Fragment>
    );
}

export default Login;