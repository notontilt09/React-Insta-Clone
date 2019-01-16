import React from 'react';

const authenticate = App =>
  class Authenticate extends React.Component {
    render() {
      return <App />;
    }
  };

  export default authenticate;