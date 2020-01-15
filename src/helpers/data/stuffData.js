import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllStuff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json`)
    .then((result) => {
      const allItemsObj = result.data;
      const items = [];
      if (allItemsObj != null) {
        Object.keys(allItemsObj).forEach((itemId) => {
          const newItem = allItemsObj[itemId];
          newItem.id = itemId;
          items.push(newItem);
        });
      }
      resolve(items);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleItem = (stuffId) => axios.get(`${baseUrl}/items/${stuffId}.json`);

const deleteItem = (stuffId) => axios.delete(`${baseUrl}/items/${stuffId}.json`);

const saveItem = (itemInfo) => axios.post(`${baseUrl}/items.json`, itemInfo);

const updateItem = (itemId, item) => axios.put(`${baseUrl}/items/${itemId}.json`, item);

export default {
  getAllStuff,
  getSingleItem,
  deleteItem,
  saveItem,
  updateItem,
};
