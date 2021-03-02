const isAllowedBot = (userAgent) => {
  if (userAgent === "StreamElements Bot") {
    return true;
  }
  return false;
};

module.exports = (req, res, next) => {
  req.isAllowedBot = isAllowedBot(req.header("User-Agent"));
  next();
};
