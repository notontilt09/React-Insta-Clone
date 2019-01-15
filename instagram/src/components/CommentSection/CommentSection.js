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
        }
    }

    componentDidMount() {
        localStorage.getItem(`comments${this.props.id}`) === null ?
            this.setState({
                comments: this.props.post.comments
            }) :
            this.setState({
                comments: JSON.parse(localStorage.getItem((`comments${this.props.id}`)))
            })
    }

    handleChange = e => {
        this.setState({
            newComment: e.target.value
        })
    }

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

    deleteComment = id => {
        const comments = [...this.state.comments];
        const newComments = comments.slice(0,id).concat(comments.slice(id+1));
        this.setState({
            comments: newComments
        }, () => localStorage.setItem(`comments${this.props.id}`, JSON.stringify(this.state.comments)))
    }

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
                        onClick={() => this.props.addLike(this.props.id)}    
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