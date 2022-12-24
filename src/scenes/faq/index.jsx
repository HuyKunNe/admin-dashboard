import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/header/Header';
import { tokens } from '../../theme';

const FAQ = props => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]} variant="h5">
                        An Importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malensuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]} variant="h5">
                        Your Favourite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malensuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]} variant="h5">
                        Some Randome Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malensuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malensuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </Box>
    );
};

FAQ.propTypes = {

};

export default FAQ;