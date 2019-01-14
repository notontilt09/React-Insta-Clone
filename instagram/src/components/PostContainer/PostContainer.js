import React from 'react';
import './PostContainer.css';
import Comment from '../CommentSection/Comment';
import AddComment from '../CommentSection/AddComment';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostContainer = props => {
    return (
        <div className="post">
            <div className="title">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt='thumbnail'/>
                <h3 className="title-username">{props.post.username}</h3>
            </div>
            <img className="main-img" src={props.post.imageUrl} alt='main-post' />
            <div className="bottom-section">
                <div className="icons">
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-comment fa-2x"></i>
                </div>
                <h3 className="number-likes">{props.post.likes} likes</h3>
                {props.post.comments.map(comment => {
                    return <Comment 
                        key={Math.random()}
                        comment={comment.text}
                        username={comment.username}
                    />
                })}
                <h3 className='timestamp'>{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</h3>
                <AddComment />
            </div>
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