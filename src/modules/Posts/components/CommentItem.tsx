import React, {FC, useEffect, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {IFetchCommentsResponse} from "../types/IFetchCommentsResponse";
import fetchComments from "../utils/fetchComments";
import CommentDetailItem from "./CommentDetailItem";

interface IProps {
    id: number
}

const CommentItem: FC<IProps> = ({id}) => {

    const [comments, setComments] = useState<IFetchCommentsResponse[]>([])
    useEffect(() => {
        fetchComments(id).then(commentsList => {
            setComments(commentsList)
        })
    }, [])

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={'up'}
            >
                <Typography>Комментарии</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {comments.map((comment, index) =>
                    <CommentDetailItem
                        key={index}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}
                    />
                )}
            </AccordionDetails>
        </Accordion>
    );
};

export default CommentItem;