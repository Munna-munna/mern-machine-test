const bcrypt = require("bcryptjs");

const hashedPassword = await bcrypt.hash("admin123", 10);

await User.create({
  email: "admin@test.com",
  password: hashedPassword,
});