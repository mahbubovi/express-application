// Controller for the /user route
exports.getUser = (req, res) => {
  res.json({
    name: "John Doe",
    role: "Student",
  });
};
