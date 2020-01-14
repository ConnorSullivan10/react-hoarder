import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import SingleStuff from '../SingleStuff/SingleStuff';
import stuffShape from '../../../helpers/props/stuffShape';

import './Stuff.scss';

class Stuff extends React.Component {
  static propTypes = {
    item: stuffShape.stuffShape,
    deleteItem: PropTypes.func,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="Stuff col-3">
        <Link className="card" to={`/stuff/${item.id}`}>
          <img src={item.itemImage} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-title">{item.itemDescription}</p>
            <button className="btn btn-danger" onClick={this.deleteItemEvent}>X</button>
            <Link className="btn btn-warning" to={`/stuff/${item.id}/edit`}>Update</Link>
          </div>
        </Link>
      </div>
    );
  }
}

export default Stuff;
