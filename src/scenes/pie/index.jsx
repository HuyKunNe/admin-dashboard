import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header/Header';
import PieChart from '../../components/char/PieChart';

const Pie = () => {
    return (
        <div>
            <Box m="20px">
            <Header title={"Bar Chart"} subtitle="Simple Bar Chart"/>
            <Box height={"75vh"}>
                <PieChart />
            </Box>
        </Box>
        </div>
    );
};

export default Pie;