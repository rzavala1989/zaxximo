const express = require("express");
const connectDB = require("./config/database");
const path = require("path");

const app = express();

// Connect to DB
connectDB();

// // Use Middleware to accept data from body
app.use(express.json({ extended: false }));

//  Routes
app.use("/api/staff", require("./routes/staff"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/logs", require("./routes/logs"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server operating on port ${PORT}`));
