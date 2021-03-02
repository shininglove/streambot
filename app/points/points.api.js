const axios = require("axios");

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.JWT_TOKEN}`;

const channel = process.env.BOT_CHANNEL_ID;

const fetchUserPoints = async (username) => {
  const url = `https://api.streamelements.com/kappa/v2/points/${channel}/${username}`;
  const response = await axios.get(url);
  return response.data;
};

const updateUserPoints = async (username, points) => {
  const url = `https://api.streamelements.com/kappa/v2/points/${channel}/${username}/${points}`;
  try {
    const response = await axios.put(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const topUserPoints = async () => {
  const url = `https://api.streamelements.com/kappa/v2/points/${channel}/top`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

const halfUserPoints = async (user) => {
  const currentUserPoints = await fetchUserPoints(user);
  updateUserPoints(user, `-${currentUserPoints.points * 0.5}`);
};

module.exports = {
  fetchUserPoints,
  updateUserPoints,
  topUserPoints,
  halfUserPoints,
};
