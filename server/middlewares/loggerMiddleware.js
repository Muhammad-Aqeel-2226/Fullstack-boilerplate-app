//-----------------------------------------
// Sample of Custom Middleware
//-----------------------------------------

const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  
  next(); // Don't be a villain — always call next()
};

module.exports = loggerMiddleware;
