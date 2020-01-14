import React from 'react';
import Stuff from '../../shared/Stuff/Stuff';

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
        <div className="myStuff-container d-flex flex-wrap">
          { this.state.items.map((item) => <Stuff key={item.id} item={item}/>) }
        </div>
      </div>
    );
  }
}

export default MyStuff;
