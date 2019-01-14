import React from 'react';
import './PostContainer.css'
import Comment from '../CommentSection/Comment'

const PostContainer = props => {
    return (
        <div className="post">
            <img src={props.post.thumbnailUrl} alt='thumbnail'/>
            <h3>{props.post.username}</h3>
            <img src={props.post.imageUrl} alt='main-post' />
            <h3>{props.post.likes}</h3>
            {props.post.comments.map(comment => {
                return <Comment 
                    key={Math.random()}
                    comment={comment.text}
                    username={comment.username}
                />
            })}

        </div>
    );
};

export default PostContainer;