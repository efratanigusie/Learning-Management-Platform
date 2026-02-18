const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  meetLink: String,
  startTime: Date,
  endTime: Date,
}, { timestamps: true });

module.exports = mongoose.model("Class", classSchema);
