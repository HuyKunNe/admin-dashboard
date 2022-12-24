import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../components/header/Header';
import { mockDataInvoices } from '../../data/mockData';
import { tokens } from '../../theme';

const Invoices = props => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 1,
            renderCell: (params) => {
                <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
            }
        },
        {
            field: 'cost',
            headerName: 'Cost',
            flex: 1
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1
        },
    ]

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoices Balance" />
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckBox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                }
            }}>
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

Invoices.propTypes = {

};

export default Invoices;