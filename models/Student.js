const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
{  
  nameInitil: { type: String },
  nameFull: { type: String, required:true,unique:true },
  addressL1: { type: String },
  addressL2: { type: String },
  city: { type: String },
  joinDate: { type: String },
  mNumber: { type: String },
  lNumber: { type: String },
  email: { type: String },
  gender: { type: String },
  dob: { type: String },
  gName: { type: String },
  gType: { type: String },
  gAddressL1: { type: String },
  gAddressL2: { type: String },
  gCity: { type: String },
  gMnumber: { type: String }
  },
  {timestamps : true}
  );
module.exports = mongoose.model("Student", studentSchema);