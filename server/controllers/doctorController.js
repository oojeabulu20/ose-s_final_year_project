const Doctor = require("../models/doctorModel");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

exports.listDoctors = asyncHandler(async (req, res, next) => {
  /*let query;
  const reqQuery = { ...req.query };
  const removeFields = ["sort"];
  removeFields.forEach((val) => delete reqQuery[val]);
    let queryString = JSON.stringify(reqQuery);
    
    query = Doctor.find(JSON.parse(queryString));
    JSON.parse(queryString) inside Doctor.find()*/

  const doctors = await Doctor.find();
  res.status(200).json({
    success: true,
    data: doctors,
  });
});

exports.addDoctor = asyncHandler(async (req, res, next) => {
  const doctors = await Doctor.create(req.body);
  res.status(201).json({
    success: true,
    data: doctors,
  });
});

exports.updateDoctor = asyncHandler(async (req, res, next) => {
  let doctor = await Doctor.findById(req.params.id);
  if (!doctor) {
    return next(new ErrorResponse(`Doctor wasn't found`, 404));
  }

  doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body);

  res.status(201).json({
    success: true,
    data: doctor,
  });
});

exports.deleteDoctor = asyncHandler(async (req, res, next) => {
  let doctor = await Doctor.findById(req.params.id);
  if (!doctor) {
    return next(new ErrorResponse(`Doctor wasn't found`, 404));
  }

  await doctor.remove();
  res.status(201).json({
    success: true,
    data: {},
  });
});
