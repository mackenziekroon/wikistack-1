const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");

app.use(express.static("public"));

//app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json());

// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  let layoutFunc = layout("");
  res.send(layoutFunc);
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
