const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `get ${req.param.id}`
    }
  });
});
router.post("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: "create  camp"
    }
  });
});
router.put("/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `update ${req.params.id}`
    }
  });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: {
      show: `delete ${req.params.id}`
    }
  });
});

module.exports = router;
