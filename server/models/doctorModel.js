const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  identification: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  officehours: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    enum: [
      "Oncologist",
      "Emergency",
      "Gynecologist",
      "Optician",
      "Paediatrician",
      "Psychiatrist",
      "Sexual-Health",
      "Intensive-Care",
    ],
  },
  location: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
