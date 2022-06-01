const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

require("dotenv-safe").config();

const mdb = require("./database/mongoConfig");
mdb.connect();

app.use(express.json());

const uniRoutes = require("./routes/uniRoutes")

app.use("/universities", uniRoutes)

module.exports = app

//configurações do server