import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <h1>This is the home page.</h1>
        <Link to="blog">Go to blog</Link>
      </>
    );
  }
}

export default Home;