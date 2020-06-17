import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPort = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/portfolio.json`)
    .then((response) => {
      const myPort = response.data;
      const port = [];
      Object.keys(myPort).forEach((projectId) => {
        myPort[projectId].id = projectId;
        port.push(myPort[projectId]);
      });

      resolve(port);
    })
    .catch((err) => reject(err));
});

export default { getPort };
