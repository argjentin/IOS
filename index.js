const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();
require("dotenv").config();

// cors
const cors = require("cors");

// Enable CORS for all origins and methods
app.use(cors());

const { sequelize, User, Place, Company } = require("./models");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API lancée sur le port ${PORT}`);
});
