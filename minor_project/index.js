const express = require("express");
require('dotenv').config();
const routeUser = require("./routes/users.route");

const app = express();

app.use(express.json());

app.use("/users",routeUser);

app.listen(3000,()=>{
    console.log("Server started @3000");
});