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
          <label className="formHeader" htmlFor="stuff-name">New Item's Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="stuff-name"
            placeholder="Enter name of item"
            value={newStuffName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label className="formHeader" htmlFor="stuffImgUrl">Item's Image</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="stuffImgUrl"
            placeholder="Enter Image URL"
            value={newStuffImage}
            onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label className="formHeader" htmlFor="stuffDescription">Item Description</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="stuffDescription"
            placeholder="Describe the item"
            value={newStuffDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <button className="btn btn-outline-success btn-lg" onClick={this.saveNewItemEvent}>Save New Item</button>
      </form>
    );
  }
}

export default New;
