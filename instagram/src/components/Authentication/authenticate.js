import React from 'react';


const authenticate = App => LoginPage => 
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      }
    }

    componentDidMount() {
      localStorage.getItem('user') === null ? this.setState({isLoggedIn: false}) : this.setState({isLoggedIn: true})
    }

    render() {
      if (!this.state.isLoggedIn) {
        return <LoginPage />
      }
      return <App />;
    }
  }


export default authenticate;