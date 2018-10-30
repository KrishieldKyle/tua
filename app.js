var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

const server_port = process.env.PORT || this.SERVER_PORT || 5510;
const env = process.env.NODE_ENV || "development";

//View Engine
app.set("view engine", "ejs");
app.set("public", path.join(__dirname, "public"));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set Static Path
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/home", function (req, res) {
  res.render("home/home");
});

app.get("/my-campaign", function (req, res) {
  res.render("campaign/my-campaign");
});

app.get("/upload-campaign", function (req, res) {
  res.render("campaign/upload-campaign");
});

app.get("/manage-campaign", function (req, res) {
  res.render("campaign/manage-campaign");
});

app.get("/update-campaign", function (req, res) {
  res.render("campaign/update-campaign-status");
});

app.get("/monitoring", function (req, res) {
  res.render("monitoring/monitoring");
});

app.listen(server_port, function () {
  console.log("Server started on port " + server_port + ".");
});
