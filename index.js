import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const todoPersonal = [];
const todoWork = [];
var currentpage = "/personal";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  currentpage = "/personal";
  res.render("index.ejs", {currentpage:currentpage});
});

app.post("/", (req, res) => {
    currentpage = "/personal";
    todoPersonal.push(req.body["newItem"]);
    res.redirect("/personal", {currentpage:currentpage});
});

app.get("/personal", (req, res) => {
    currentpage = "/personal";
    res.render("index.ejs", {currentpage:currentpage, todo: todoPersonal});
});

app.get("/work", (req, res) => {
    currentpage = "/work";
    res.render("index.ejs", {currentpage:currentpage, todo: todoWork});
});
  
app.post("/personal", (req, res) => {
    todoPersonal.push(req.body["newItem"]);
    res.redirect("/personal");
});
app.post("/work", (req, res) => {
    todoWork.push(req.body["newItem"]);
    res.redirect("/work");
});
  
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

