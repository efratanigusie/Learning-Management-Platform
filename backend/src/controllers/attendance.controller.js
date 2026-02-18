const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  const record = await Attendance.create({
    student: req.user.id,
    class: req.body.classId,
  });

  res.json(record);
};
