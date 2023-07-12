const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
//main route
app.get("/", (req, res) => {
  res.render("main");
});
//about
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/downloads", (req, res) => {
  res.render("downloads");
});
app.get("/documentation", (req, res) => {
  res.render("documentation");
});
app.get("/community", (req, res) => {
  res.render("community");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(5050, () => {
  console.log("Server is running at port 5050");
});
