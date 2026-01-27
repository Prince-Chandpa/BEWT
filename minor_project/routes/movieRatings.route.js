const express = require("express");
const { deleteMovieRating, updateMovieRating, insertMovieRating, getMovieRatingByID, getAllMovieRatings } = require("../services/movieRatings.service");
const { authMiddleware } = require("../middlewares/auth.middleware");

const routeMovieRating = express.Router();

routeMovieRating.use(authMiddleware);

//get all
routeMovieRating.get("/", async (req,res) => {
    const data = await getAllMovieRatings();
    res.send(data);
});

//get by id
routeMovieRating.get("/:id", async (req,res) => {
    const data = await getMovieRatingByID(req.params.id);
    res.send(data);
});


//insert
routeMovieRating.post("/", async (req,res) => {
    const data = await insertMovieRating(req.body);
    res.send(data);
});

//edit
routeMovieRating.patch("/:id", async (req,res) => {
    const data = await updateMovieRating(req.params.id, req.body);
    res.send(data);
});

//delete
routeMovieRating.delete("/:id", async (req,res) => {
    const data = await deleteMovieRating(req.params.id);
    res.send(data);
});


module.exports = routeMovieRating;