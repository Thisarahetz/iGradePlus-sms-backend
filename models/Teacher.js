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
    lastnameEMG: { type: String, },
    cityEMG: { type: String, },
    genderEMG: { type: String, },
    Emobilenumber: { type: Number, }, 
    Efixnumber: { type: Number, },
    isAdmin: { type: Boolean, default: false },
  },
  );
module.exports = mongoose.model("Teacher", teacherSchema);