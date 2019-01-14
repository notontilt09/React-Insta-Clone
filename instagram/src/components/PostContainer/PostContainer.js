import React from 'react';
import './PostContainer.css';
import Comment from '../CommentSection/Comment';
import AddComment from '../CommentSection/AddComment';
import PropTypes from 'prop-types';

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
            <AddComment />

        </div>
    );
};

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string, 
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;