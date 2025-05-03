require("dotenv").config();

// Core Modules

// External Modules
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

// Local Modules
const { connectDB, dbURI } = require("./config/database");
const errorController = require("./controllers/errorController");
const authRouter = require("./routes/authRouter");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

// Init App
const app = express();

// External Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Store
const store = new MongoDBStore({
  uri: dbURI,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// Custom Middlewares
app.use(loggerMiddleware)

// API Routes Middleware
app.use("/api/auth", authRouter);

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
