const mongoose = require("mongoose");

const connectDB = async () => {
  let dbURI;
  try {
    const { MONGODB_URI, USER_NAME, PASSWORD, DB_NAME, CLUSTER, APP_NAME } =
      process.env;
    
    dbURI = MONGODB_URI
      .replaceAll("<username>", USER_NAME)
      .replace("<password>", PASSWORD)
      .replace("<database>", DB_NAME)
      .replace("<appname>", APP_NAME)
      .replace("<cluster>", CLUSTER);

    await mongoose.connect(dbURI);
    console.log("🟢 MongoDB connection successful");
  } catch (err) {
    console.log(dbURI); // This logs the final URI to help debug
    console.error("🔴 MongoDB connection error:", err.message);
    process.exit(1); // optional but good for CI/CD
  }
};

module.exports = connectDB;
