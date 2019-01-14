import React from 'react';
import './Comment.js';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p>{props.username}</p>
            <span>{props.comment}</span>
        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment;