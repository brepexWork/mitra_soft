import React, {FC} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import CommentDetailItem from "./CommentDetailItem";
import {PostsAPI} from "../services/PostsAPI";
import Loader from "../../../components/Loader";

interface IProps {
    id: number
}

const CommentItem: FC<IProps> = ({id}) => {

    const {data: comments, isLoading, isError} = PostsAPI.useFetchCommentsQuery(id)

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={'up'}
            >
                <Typography>Комментарии</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {comments && comments.map((comment, index) =>
                    <CommentDetailItem
                        key={index}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}
                    />
                )}
                {isLoading && <Loader />}
            </AccordionDetails>
        </Accordion>
    );
};

export default CommentItem;