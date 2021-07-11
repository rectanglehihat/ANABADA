import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";

// import Search from "../shared/Search";

const Header = () => {

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
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>
                        아나바다
                    </Text>
                </Grid>
                {/* <Grid>
                    <Search />
                </Grid> */}
                <Grid is_flex>
                    <Button
                    // _onClick={() => {
                    //     history.push("/login");
                    // }}
                    >
                        로그인
                    </Button>
                    <Button
                    // _onClick={() => {
                    //     history.push("/signup");
                    // }}
                    >
                        회원가입
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Header;