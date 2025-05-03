const mongoose = require("mongoose");

// Build URI synchronously
const buildDBURI = () => {
  const { MONGODB_URI, USER_NAME, PASSWORD, DB_NAME, CLUSTER, APP_NAME } =
    process.env;

  return MONGODB_URI.replaceAll("<username>", USER_NAME)
    .replace("<password>", PASSWORD)
    .replace("<database>", DB_NAME)
    .replace("<appname>", APP_NAME)
    .replace("<cluster>", CLUSTER);
};

const dbURI = buildDBURI();

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("🟢 MongoDB connection successful");
  } catch (err) {
    console.error("🔴 MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB, dbURI };
