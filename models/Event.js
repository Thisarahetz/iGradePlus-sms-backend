const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema(
{
    eventName: { type: String, required: true, unique: true },
    cheifGest: { type: String },
    startDate: { type: String },
    organizer: { type: String },
    endDate: { type: String },
    startTime: { type: String },
    endTime: { type: String },    
    eventType: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    description: { type: String },                 
},
{ timestamps: true }
);
module.exports = mongoose.model("Event", EventSchema)