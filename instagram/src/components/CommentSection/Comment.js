import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <span className="comment-username">{props.username}</span>
            <span className="comment-text">{props.comment}</span>
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment;