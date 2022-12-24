import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header/Header';
import BarChar from '../../components/char/BarChart';

const Bar = () => {
    return (
        <Box m="20px">
            <Header title={"Bar Chart"} subtitle="Simple Bar Chart"/>
            <Box height={"75vh"}>
                <BarChar />
            </Box>
        </Box>
    );
};

export default Bar;