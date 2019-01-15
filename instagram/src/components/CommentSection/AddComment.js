import React from 'react';
import './Comment.js';

const AddComment = props => {
    return (
        <form 
            className='comment-form'
            onSubmit={props.addComment}    
        >
            <input 
                className='comment-input'
                name="newComment" 
                value={props.newComment}
                onChange={props.handleChange}
                type='text' 
                placeholder='Add a comment...'   
                autoComplete='off' 
            />            
        </form>
    )
}

export default AddComment;