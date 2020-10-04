const axios = require("axios");
const saveData = require("./savedb");

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.JWT_TOKEN}`;

const fetchUserPoints = async (channel, username) => {
  const url = `https://api.streamelements.com/kappa/v2/points/${channel}/${username}`;
  const response = await axios.get(url);
  return response.data;
};

const updateUserPoints = async (channel, username, points) => {
  const url = `https://api.streamelements.com/kappa/v2/points/${channel}/${username}/${points}`;
  try {
    const response = await axios.put(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const topUserPoints = async channel => {
  const url = `https://api.streamelements.com/kappa/v2/points/${channel}/top`;
  try {
    const response = await axios.get(url);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { fetchUserPoints, updateUserPoints, topUserPoints };
