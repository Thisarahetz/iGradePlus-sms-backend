const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, unique: true },
    lastname: { type: String},
    addressline1: { type: String },
    addressline2: { type: String  },
    city: { type: String, },
    gender: { type: String, },
    mobilenumber: { type: Number, }, 
    fixnumber: { type: Number, },
    teachsubject: { type: String, },
    firstnameEMG: { type: String, },
    addressline2EMG: { type: String  },
    cityEMG: { type: String, },
    genderEMG: { type: String, },
    mobilenumberEMG: { type: Number, }, 
    fixnumberEMG: { type: Number, },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
  );
module.exports = mongoose.model("Teacher", teacherSchema);