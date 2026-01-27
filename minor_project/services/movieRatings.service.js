const jwt = require("jsonwebtoken");
const { getAll, getByID, insert, update, deleteByID } = require("../models/movieRatings.model");

async function getAllMovieRatings(){
    const data = await getAll();
    if(data){
        return {
            error: false,
            data,
            message: "MovieRatings fetched successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while fetching the MovieRatings !!"
        };
    }
}

async function getMovieRatingByID(id){
    const data = await getByID(id);
    if(data){
        return {
            error: false,
            data,
            message: "MovieRating fetched successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while fetching the MovieRating !!"
        };
    }
}

async function insertMovieRating(formData){
    const data = await insert(formData);
    if(data){
        return {
            error: false,
            data,
            message: "MovieRating inserted successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while inserting the MovieRating !!"
        };
    }
}

async function updateMovieRating(id, formData){
    const data = await update(id,formData);
    if(data){
        return {
            error: false,
            data,
            message: "MovieRating updated successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while updating the MovieRating !!"
        };
    }
}

async function deleteMovieRating(id){
    const data = await deleteByID(id);
    if(data){
        return {
            error: false,
            data,
            message: "MovieRating deleted successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while deleting the MovieRating !!"
        };
    }
}

module.exports = {getAllMovieRatings, getMovieRatingByID, insertMovieRating, updateMovieRating, deleteMovieRating};