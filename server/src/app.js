const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/rrorMiddleware");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// error middleware
app.use(errorHandler);

module.exports = app;
