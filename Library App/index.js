const express = require("express");

const router = require("./application");
const bodyParser = require('body-parser');
const env = require("dotenv");
const bookRouter = require("./application/book-route");
const db = require('./db/db');


const app = express();
const port = 3000;

env.config();
db.bootstrap();

app.use(bodyParser.urlencoded({exended:false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use('/', router);
app.use("/books", bookRouter);

app.listen(port, () => {
    console.log("app is listening");

});
