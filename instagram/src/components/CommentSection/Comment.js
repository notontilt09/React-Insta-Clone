import React from 'react';
import './Comment.js';

const Comment = props => {
    return (
        <div className="comment">
            <p>{props.username}</p>
            <span>{props.comment}</span>
        </div>
    )
}

export default Comment;