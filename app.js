const express = require("express");
const controller = require("./controller");

const app = express();

// Route 3: Middleware - logs for every incoming request
const logger = (req, res, next) => {
  console.log("Request Received");
  next();
};
app.use(logger);

// Route 1: Home
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Express Server",
  });
});

// Route 2: User (uses controller)
app.get("/user", controller.getUser);

// Route 4: Cookie
app.get("/login", (req, res) => {
  res.cookie("user", "john");
  res.json({ success: true, message: "Cookie set" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
