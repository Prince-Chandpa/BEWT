const express = require("express");
const { getAllMovies, getMovieByID, insertMovie, updateMovie, deleteMovie } = require("../services/movies.service");
const { authMiddleware } = require("../middlewares/auth.middleware");

const routeMovie = express.Router();

routeMovie.use(authMiddleware);

//get all
routeMovie.get("/", async (req,res) => {
    const data = await getAllMovies();
    res.send(data);
});

//get by id
routeMovie.get("/:id", async (req,res) => {
    const data = await getMovieByID(req.params.id);
    res.send(data);
});

//login
routeMovie.post("/login", async (req,res) => {
    const data = await checkLogin(req.body);
    res.send(data);
});

//insert
routeMovie.post("/", async (req,res) => {
    const data = await insertMovie(req.body);
    res.send(data);
});

//edit
routeMovie.patch("/:id", async (req,res) => {
    const data = await updateMovie(req.params.id, req.body);
    res.send(data);
});

//delete
routeMovie.delete("/:id", async (req,res) => {
    const data = await deleteMovie(req.params.id);
    res.send(data);
});


module.exports = routeMovie;