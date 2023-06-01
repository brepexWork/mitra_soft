import React, {FC} from 'react';
interface IProps {
    name: string
    email: string
    body: string
}

const CommentDetailItem:FC<IProps> = React.memo(({name, body, email}) => {
    return (
        <div className={`mb-6 p-2 border-custom_brown`}>
            <div className={` text-sm`}><span className={`font-bold`}>Имя:</span> {name}</div>
            <div className={`my-3 text-sm`}><span className={`font-bold`}>Email</span>: {email}</div>
            <div className={` text-sm`}><span className={`font-bold`}>Комментарий:</span> {body}</div>
        </div>
    );
})

export default CommentDetailItem;