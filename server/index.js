const express = require("express");
const app = express();
const PORT = 5000;

app.use(require("cors")());

app.get("/api", (req, res) => {
  res.json({ message: "Backend is running successfully 🎉" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});