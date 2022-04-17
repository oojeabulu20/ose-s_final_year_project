const express = require("express");
const doctorController = require("../controllers/doctorController");
const router = express.Router();

//@route - /doctors
//read + create
router
  .route("/")
  .get(doctorController.listDoctors)
  .post(doctorController.addDoctor);
//update + delete
router
  .route("/:id")
  .put(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

module.exports = router;
