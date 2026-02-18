const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./src/models/User"); // adjust path if needed

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

async function seedUsers() {
  try {
    // Optional: clear existing test users
    await User.deleteMany({
      email: { $in: ["admin@test.com", "teacher@test.com", "student@test.com"] }
    });

    const users = [
      {
        name: "Admin User",
        email: "admin@test.com",
        password: "123456",
        role: "admin",
      },
      {
        name: "Teacher User",
        email: "teacher@test.com",
        password: "123456",
        role: "teacher",
      },
      {
        name: "Student User",
        email: "student@test.com",
        password: "123456",
        role: "student",
      },
    ];

    for (let user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await User.create({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      });

      console.log(`${user.role} created successfully`);
    }

    console.log("All users created successfully ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedUsers();
