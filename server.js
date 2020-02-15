const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");

const camps = require("./routes/rout-camps");
dotenv.config({ path: "./config/config.env" });

const app = express();

//app.use(logger);
//dev login middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mont routes
app.use("/api/v1/camps/", camps);

const port = process.env.PORT;
app.listen(port, console.log("server running"));
