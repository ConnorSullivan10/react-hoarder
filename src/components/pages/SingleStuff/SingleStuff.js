import React from 'react';
import './SingleStuff.scss';
import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    stuff: {},
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    stuffData.getSingleItem(stuffId)
      .then((response) => {
        this.setState({ stuff: response.data });
      })
      .catch((err) => console.error('error in get single stuff', err));
  }

  render() {
    const { stuff } = this.state;
    return (
      <div className="SingleStuff" id={stuff.id}>
        <h1>{stuff.itemName}</h1>
        <img src={stuff.itemImage} className="image" alt=""/>
        <p className="card-title">{stuff.itemDescription}</p>
      </div>
    );
  }
}

export default SingleStuff;
