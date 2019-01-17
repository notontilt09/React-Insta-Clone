import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="post">
            <div className="title">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt='thumbnail'/>
                <h3 className="title-username">{props.post.username}</h3>
            </div>
            <img className="main-img" src={props.post.imageUrl} alt='main-post' />
            <CommentSection 
                post={props.post}
                addLike={props.addLike}
                id={props.id}    
            />
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
        })),
        addLike: PropTypes.func
    })
}

export default PostContainer;