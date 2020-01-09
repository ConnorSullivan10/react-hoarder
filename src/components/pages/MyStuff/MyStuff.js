import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './MyStuff.scss';

class MyStuff extends React.Component {
  // static propTypes = {

  // }

  render() {
    // const {} = this.props;
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="myStuff-btn-container d-flex flex-wrap">
          <Link className="btn btn-primary" to={'/stuff/12345/edit'}>Edit</Link>
          <Link className="btn btn-success" to={'/stuff/12345'}>Single</Link>
        </div>
      </div>
    );
  }
}

export default MyStuff;
