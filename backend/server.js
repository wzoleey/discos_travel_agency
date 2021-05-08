const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
let fs = require("fs");

dotenv.config();

// Connect mongoose database
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"));

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

// Send data
const hotelDatabase = require("./data/hotels_data.json");

app.get("/destination", (req, res) => {
  res.send(hotelDatabase);
});

app.get("/destination/:city", (req, res) => {
  const city = hotelDatabase.filter((item) => item.city === req.params.city);
  if (!city) res.status(404).send("The cars width the given brand was not found.");
  res.send(city);
});

app.listen(PORT, () => console.log("Server is run on this", PORT));
