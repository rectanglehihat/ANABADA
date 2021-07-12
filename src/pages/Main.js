import React from "react";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Input from "../elements/Input";
import Button from "../elements/Button";

const Main = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Button >물건사기</Button>
                <Button>물건팔기</Button>
            </Grid>
        </React.Fragment>
    );
}

export default Main;
