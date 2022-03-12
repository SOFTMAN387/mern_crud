require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
require("./db/conn");
const cors = require("cors");
const router = require("./router/routers");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log(`server is working at port ${port}`);
})