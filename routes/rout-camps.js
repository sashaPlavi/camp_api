const express = require("express");

const {
  getCamp,
  getCamps,
  updateCamp,
  deleteCamp,
  createCamp
} = require("../controllers/con-camps");
const router = express.Router();
router
  .route("/")
  .get(getCamps)
  .post(createCamp);
router
  .route("/:id")
  .get(getCamp)
  .put(updateCamp)
  .delete(deleteCamp);

module.exports = router;
