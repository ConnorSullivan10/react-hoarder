import React from 'react';
import { Link } from 'react-router-dom';
import SingleStuff from '../SingleStuff/SingleStuff';

// import PropTypes from 'prop-types';
import stuffData from '../../../helpers/data/stuffData';
import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    stuffData.getAllStuff()
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error from get items', err));
  }

  componentDidMount() {
    this.getItems();
  }

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
