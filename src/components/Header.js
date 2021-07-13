import React from "react";
import { history } from "../redux/configureStore";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";

// import Search from "../shared/Search";

const Header = (props) => {

    // if (is_login && is_session) {
    //     return (
    //         <React.Fragment>
    //             <Grid is_flex padding="4px 16px">
    //                 <Grid>
    //                     <Text margin="0px" size="24px" bold>
    //                         power19power
    //                     </Text>
    //                 </Grid>

    //                 <Grid is_flex>
    //                     <Button
    //                         _onClick={() => {
    //                             dispatch(userActions.logoutFB());
    //                         }}
    //                     >
    //                         로그아웃
    //                     </Button>
    //                 </Grid>
    //             </Grid>
    //         </React.Fragment>
    //     );
    // }

    //   로그인 중이 아니라면 로그인 전 헤더를 보여줍니다.
    return (
        <React.Fragment>
            <Grid is_flex padding="10px 100px">
                <Grid>
                    <Text 
                    margin="0px" 
                    size="24px" 
                    bold 
                    _onClick={() => props.history.push("/")}>
                        아나바다
                    </Text>
                </Grid>

                {/* <Grid>
                    <Search />
                </Grid> */}

                <Grid is_flex>
                    <Button 
                    margin=" 0 10px"
                     _onClick={() => {
                         console.log("로그인으로 가기")
                         props.history.push("/login");
                     }}
                    >
                        로그인
                    </Button>
                    <Button
                     _onClick={() => {
                        console.log("회원가입으로 가기")
                        props.history.push("/signup");
                     }}
                    >
                        회원가입
                    </Button>
                </Grid>
            </Grid>
            {/* <Grid padding="0px 100px" center>
                    <Text 
                    size="32px" 
                    bold 
                    margin="20px 0px" 
                    border="#222831 solid "
                    bw="0px 0px 10px 0px"
                >상 품 상 세</Text>
                </Grid> */}
        </React.Fragment>
    );
};

export default Header;