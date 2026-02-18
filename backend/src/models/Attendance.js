const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  joinTime: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
