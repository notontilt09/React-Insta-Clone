import React from 'react';
import './PostContainer.css';
import Comment from '../CommentSection/Comment';
import AddComment from '../CommentSection/AddComment';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostContainer = props => {
    return (
        <div className="post">
            <img src={props.post.thumbnailUrl} alt='thumbnail'/>
            <h3>{props.post.username}</h3>
            <img src={props.post.imageUrl} alt='main-post' />
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <h3>{props.post.likes}</h3>
            {props.post.comments.map(comment => {
                return <Comment 
                    key={Math.random()}
                    comment={comment.text}
                    username={comment.username}
                />
            })}
            <AddComment />
            <h3 className='timestamp'>{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</h3>

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