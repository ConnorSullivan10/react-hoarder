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

export default {
  getAllStuff,
  getSingleItem,
};
