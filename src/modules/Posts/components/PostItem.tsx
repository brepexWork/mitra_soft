import React, {FC} from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import bg from "../images/no-photo.jpg";
import CommentItem from "./CommentItem";

interface IProps {
    title: string
    description: string
    userId: number
    id: number
}
const PostItem:FC<IProps> = React.memo(({title, description, userId, id}) => {
    return (
        <Card sx={{marginBottom: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Avatar
                alt="Avatar"
                sx={{
                    width: '80px',
                    height: '80px',
                    margin: '10px'
                }}
                src={'https://img.hhcdn.ru/photo/706239102.jpeg?t=1685592601&h=XiWA9RL1ZLLwfM2EMrDFpg'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Перейти</Button>
            </CardActions>

            <CommentItem id={id}/>
        </Card>
    )
})

export default PostItem;