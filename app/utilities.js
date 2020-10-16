const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const formatCount = (count, withAbbr = false, decimals = 2) => {
  const COUNT_ABBRS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
  const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
  let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
  if (withAbbr) {
    result += `${COUNT_ABBRS[i]}`;
  }
  return result;
};

const dataFormatter = (data,keyName,valName) => {
  const newDataObj = {};

  for (let [_, dict] of Object.entries(data)) {
    const value = dict[valName];
    const key = dict[keyName];
    const shortedNum = formatCount(value, true);
    newDataObj[key] = shortedNum;
  }
  return newDataObj;
};

module.exports = {dataFormatter,getRandomInt};
