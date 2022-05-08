const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema(
{  
    nameInitial: { type: String },
    fullName: { type: String },
    address1: { type: String },
    address2: { type: String },
    city: { type: String },
    date: { type: String },
    Mnumber: { type: String },
    Lnumber: { type: String },
    email: { type: String },
    gender: { type: String },
    dob: { type: String },
    nic: { type: String , required: true, unique: true},
    jobtype: { type: String },
    special: { type: String },
    Gname: { type: String },
    GardianType: { type: String },
    add3: { type: String },
    add4: { type: String },
    city2: { type: String },
    Mnumber2: { type: String },
  },
  {timestamps: true}
  );
module.exports = mongoose.model("Staff", staffSchema);