import React from 'react';
import './Edit.scss';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class Edit extends React.Component {
  state = {
    newStuffName: '',
    newStuffImage: '',
    newStuffDescription: '',
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    if (stuffId) {
      stuffData.getSingleItem(stuffId)
        .then((response) => {
          this.setState({ newStuffName: response.data.itemName, newStuffImage: response.data.itemImage, newStuffDescription: response.data.itemDescription });
        })
        .catch((err) => console.error('error in get single item', err));
    }
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

  updateItemEvent = (e) => {
    e.preventDefault();
    const { stuffId } = this.props.match.params;
    const { newStuffName, newStuffImage, newStuffDescription } = this.state;
    const editedItem = {
      itemName: newStuffName,
      itemImage: newStuffImage,
      itemDescription: newStuffDescription,
      uid: authData.getUid(),
    };
    stuffData.updateItem(stuffId, editedItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('error from save new item', err));
  }

  render() {
    const { newStuffName, newStuffImage, newStuffDescription } = this.state;
    return (
      <form className="Edit">
        <div className="form-group">
          <label className="formHeader" hhtmlFor="stuff-name">Item's Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="stuff-name"
            value={newStuffName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label className="formHeader" htmlFor="stuffImgUrl">Image URL</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="stuffImgUrl"
            value={newStuffImage}
            onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label className="formHeader" htmlFor="stuffDescription">Description</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="stuffDescription"
            value={newStuffDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <button className="btn btn-lg btn-outline-success" onClick={this.updateItemEvent}>Update Item</button>
      </form>
    );
  }
}

export default Edit;
