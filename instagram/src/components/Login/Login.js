import React from 'react'

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
                <form>
                    <input 
                        type="text"
                        required 
                        name="username"
                        placeholder="username" 
                        value={this.state.username}
                        onChange={this.handleChange}    
                    />
                    <input 
                        type="text" 
                        name="password"
                        placeholder="password" 
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