const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
let fs = require("fs");
const fileUpload = require("express-fileupload");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.use(fileUpload());

// Connect mongoose database
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"));

// Send hotels data
const hotelDatabase = require("./data/hotels_data.json");

app.get("/destination", (req, res) => {
  res.send(hotelDatabase);
});

app.get("/destination/:city", (req, res) => {
  const city = hotelDatabase.filter((item) => item.city === req.params.city);
  if (!city) res.status(404).send("The cars width the given brand was not found.");
  res.send(city);
});

//READ FORM JSON
let userDataRead = "";
fs.readFile("data/form.json", (err, data) => {
  if (err) throw err;
  userDataRead = JSON.parse(data);
});

app.post("/upload", function (req, res) {
  let uploadPath;
  let userData;
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send("Input fields are not filled properly");
    return;
  }
  console.log(req.body);
  userData = req.body.userdata;

  //PUSH NEW DATA TO DATA ARRAY
  userDataRead.push(JSON.parse(userData));

  fs.writeFile("data/form.json", JSON.stringify(userDataRead, null, 2), function (err) {
    if (err) return console.log(err);
    console.log("JSON UPDATED");
  });

  res.send("File uploaded to " + uploadPath);
});

app.listen(PORT, () => console.log("Server is run on this", PORT));
