const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:munna9182@cluster0.lxigatx.mongodb.net/mern-machine-test?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected Successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ Full Error:");
    console.log(err);
    process.exit(1);
  });