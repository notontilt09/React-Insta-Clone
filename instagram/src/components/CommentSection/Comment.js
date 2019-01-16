import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div 
            className="comment"
            onMouseEnter={props.showDelete}
            onMouseLeave={props.removeDelete}    
        >
            <span className="comment-username">{props.username}</span>
            <span className="comment-text">{props.comment}</span>
            <span 
                onClick={() => props.deleteComment(props.id)} 
                className="delete-comment hide">
            &#9747;
            </span>
            
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment;