// logs request in console

const logger = (req, res, next) => {
  console.log("middleware");
  req.hello = "hello world";
  next();
};

module.exports = logger;
