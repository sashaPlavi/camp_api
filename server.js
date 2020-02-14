const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/v1/camps/", (req, res) => {
  res.status(200).json({
    sucess: false,
    data: {
      show: `get all`
    }
  });
});

app.get("/api/v1/camps/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `get ${req.param.id}`
    }
  });
});
app.post("/api/v1/camps/", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: "create  camp"
    }
  });
});
app.put("/api/v1/camps/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `update ${req.params.id}`
    }
  });
});
app.delete("/api/v1/camps/delete/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `delete ${req.params.id}`
    }
  });
});

const port = process.env.PORT || 5003;
app.listen(port, console.log("server running"));
