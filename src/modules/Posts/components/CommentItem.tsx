import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";

const CommentItem = () => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={'up'}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CommentItem;