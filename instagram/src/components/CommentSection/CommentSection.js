import React from 'react';
import './Comment.css';
import Comment from './Comment';
import moment from 'moment';
import AddComment from '../CommentSection/AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: '',
            isLiked: false
        }
    }

    // if post has comments in local storage, set this.state.comments to those comments.  Otherwise use the comments passed down from the dummyData
    componentDidMount() {
        localStorage.getItem(`comments${this.props.id}`) === null ?
            this.setState({
                comments: this.props.post.comments
            }) :
            this.setState({
                comments: JSON.parse(localStorage.getItem((`comments${this.props.id}`)))
            })
    }

    // update this.state.newComment to user input
    handleChange = e => {
        this.setState({
            newComment: e.target.value
        })
    }

    // update this.state.comments with user input.  Currently using randomly generated username
    // ***** TODO: grab username from login session instaed of getRandomUserName() ******
    addComment = e => {
        e.preventDefault();
        const comments = [...this.state.comments];
        comments.push({
            username: this.getRandomUserName(),
            text: this.state.newComment
        })
        this.setState({
            comments: comments,
            newComment: ''
        }, () => localStorage.setItem(`comments${this.props.id}`, JSON.stringify(this.state.comments)))
    }

    // delete comment from post
    deleteComment = id => {
        const comments = [...this.state.comments];
        // return new copy of array with the index of the clicked comment removed
        const newComments = comments.slice(0,id).concat(comments.slice(id+1));
        this.setState({
            comments: newComments
        }, () => localStorage.setItem(`comments${this.props.id}`, JSON.stringify(this.state.comments)))
    }

    // show the delete option for a comment if user hovers over the comment
    showDelete = e => { 
            if (e.target.classList.value !== 'comment') {
                e.target.parentElement.children[2].classList.remove('hide');
            }
        
        
        // if (e.target)
        // console.log(e.target.parentElement.children[2]);
    }

    removeDelete = e => {
        if (e.target.classList.value !== 'comment') {
            e.target.parentElement.children[2].classList.add('hide')
        }
    }

    // helper function to generate a random username
    getRandomUserName = () => {
        const user = [];
        const symbols = 'abcdefghijklmnopqrstuvwxyz1234567890.!?';
        for (let i = 0; i < 10; i++) {
            user.push(symbols[Math.floor(Math.random()*symbols.length)])
        }
        return user.join('');
    }

    render() {
        return(
            <div className="bottom-section">
                <div className="icons">
                    <i 
                        className="far fa-heart fa-2x"
                        onClick={() => {
                            if (!this.state.isLiked) {this.props.addLike(this.props.id)}
                        }}    
                    ></i>
                    <i className="far fa-comment fa-2x"></i>
                </div>
                <h3 className="number-likes">{this.props.post.likes} likes</h3>
                {this.state.comments.map((comment, index) => {
                    return <Comment 
                        key={index}
                        id={index}
                        comment={comment.text}
                        username={comment.username}
                        deleteComment={this.deleteComment}
                        showDelete={this.showDelete}
                        removeDelete={this.removeDelete}
                    />
                })}
                <h3 className='timestamp'>{moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</h3>
                <AddComment 
                    newComment={this.state.newComment}
                    addComment={this.addComment}
                    handleChange={this.handleChange} 
                    getRandomUserName={this.getRandomUserName}   
                />
            </div>
        )
    }
}

export default CommentSection;