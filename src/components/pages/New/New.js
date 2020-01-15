import React from 'react';
import './New.scss';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class New extends React.Component {
  state = {
    newStuffName: '',
    newStuffImage: '',
    newStuffDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ newStuffName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ newStuffImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ newStuffDescription: e.target.value });
  }

  saveNewItemEvent = (e) => {
    e.preventDefault();
    const { newStuffName, newStuffImage, newStuffDescription } = this.state;
    const newItem = {
      itemName: newStuffName,
      itemImage: newStuffImage,
      itemDescription: newStuffDescription,
      uid: authData.getUid(),
    };
    stuffData.saveItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('error from save new item', err));
  }

  render() {
    const { newStuffName, newStuffImage, newStuffDescription } = this.state;
    return (
      <form className="New">
        <div className="form-group">
          <label htmlFor="stuff-name">New Item's Name</label>
          <input
            type="text"
            className="form-control"
            id="stuff-name"
            placeholder="Enter name of new item"
            value={newStuffName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stuffImgUrl">Item Image URL</label>
          <input
            type="text"
            className="form-control"
            id="stuffImgUrl"
            placeholder="Enter the new item's image URL"
            value={newStuffImage}
            onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stuffDescription">Item Description</label>
          <input
            type="text"
            className="form-control"
            id="stuffDescription"
            placeholder="Enter a description about your new item"
            value={newStuffDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.saveNewItemEvent}>Save New Item</button>
      </form>
    );
  }
}

export default New;
