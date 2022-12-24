import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header/Header';

const Dashboard = props => {
    return (
    <Box m="20px">
        <Box display='flex' justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
    </Box>
    );
};

Dashboard.propTypes = {

};

export default Dashboard;