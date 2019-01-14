import React from 'react';
import './Comment.js';

const AddComment = props => {
    return (
        <form className='comment-form'>
            <input 
                className='comment-input' 
                type='text' 
                placeholder='Add a comment...'    
            />            
        </form>
    )
}

export default AddComment;