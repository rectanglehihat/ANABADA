import React from "react";

import Grid from "../elements/Grid";

import main_image from "../shared/main_image.png";

const Main = (props) => {
    return (
        <React.Fragment>
            <Grid padding="20px 100px">
                <img src={main_image} style={{ height: 'auto', width: '100%' }} />
            </Grid>
        </React.Fragment>
    );
}

export default Main;