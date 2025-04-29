require("dotenv").config();

// Core Modules

// External Modules
const express = require("express");
const cors = require("cors");

// Local Modules
const connectDB = require("./config/database");
const errorController = require("./controllers/errorController");
const authRouter = require("./routes/authRouter");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

// Init App
const app = express();

// External Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Local Middlewares
app.use(loggerMiddleware);

// API Routes Middleware
app.use("/api/auth", authRouter)


// 404 Middleware
app.use(errorController.pageNotFound);

// Start Server
const PORT = process.env.PORT || 5172;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

startServer();
