import React, {FC} from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import bg from "../images/no-photo.jpg";
import CommentItem from "./CommentItem";
import {Link} from "react-router-dom";

interface IProps {
    title: string
    description: string
    userId: number
    id: number
}
const PostItem:FC<IProps> = React.memo(({title, description, userId, id}) => {

    return (
        <Card sx={{marginBottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Link to={`/user/${userId}`}>
                <Avatar
                    alt="Avatar"
                    sx={{
                        width: '80px',
                        height: '80px',
                        margin: '10px'
                    }}
                    src={'https://img.hhcdn.ru/photo/706239102.jpeg?t=1685592601&h=XiWA9RL1ZLLwfM2EMrDFpg'}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CommentItem id={id}/>
        </Card>
    )
})

export default PostItem;