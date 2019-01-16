import React from 'react'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
    }

    render() {
        return (
            <div className="login-form">
                <form className="login-form-main">
                    <h1>Welcome to React&middot;Instagram!</h1>
                    <input 
                        className="login-form-username"
                        type="text"
                        required 
                        name="username"
                        placeholder="username" 
                        value={this.state.username}
                        onChange={this.handleChange}    
                    />
                    <input 
                        className="login-form-password"
                        type="text" 
                        name="password"
                        placeholder="password" 
                        autoComplete='off'
                        value={this.state.password}
                        onChange={this.handleChange}    
                    />
                    <button onClick={this.handleLogin}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;