import React from 'react';
import {CircularProgress} from "@mui/material";

const Loader = () => {
    return (
        <CircularProgress
            sx={{
                margin: '0 auto',
                display: 'block'
            }}
        />
    );
};

export default Loader;