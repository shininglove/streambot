const lowDb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const saveToDB = async (keyName, data) => {
  const db = await lowDb(new FileAsync(`${__dirname}/data/db.json`));
  db.defaults({ [keyName]: [] }).write();
  console.log(keyName);
  await db
    .get(keyName)
    .push(data)
    .write();
};

module.exports = saveToDB;
