const express = require("express");
require('dotenv').config();
const routeUser = require("./routes/users.route");
const routeMovie = require("./routes/movies.route");
const routeMovieRating = require("./routes/movieRatings.route");

const app = express();

app.use(express.json());

app.use("/users",routeUser);
app.use("/movies",routeMovie);
app.use("/movie-ratings",routeMovieRating)

app.listen(3000,()=>{
    console.log("Server started @3000");
});