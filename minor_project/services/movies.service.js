const jwt = require("jsonwebtoken");
const { getAll, getByID, getByMovieName, insert, update, deleteByID } = require("../models/movies.model");

async function getAllMovies(){
    const data = await getAll();
    if(data){
        return {
            error: false,
            data,
            message: "Movies fetched successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while fetching the Movies !!"
        };
    }
}

async function getMovieByID(id){
    const data = await getByID(id);
    if(data){
        return {
            error: false,
            data,
            message: "Movie fetched successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while fetching the Movie !!"
        };
    }
}

async function checkLogin(formData){
    const data = await getByMovieName(formData.MovieName); 
    if(data){
        if(data.Password === formData.Password){
            const token = jwt.sign(data, process.env.PRIVATEKEY, { expiresIn: '1h' })
            return {
                error: false,
                data: token,
                message: "Movie loged in successfully"
            };
        }
        return {
            error: true,
            message: "Movie Name or Movie Image does not match !!"
        };
    }else{
        return {
            error: true,
            message: "Movie Name or Movie Image does not match !!"
        };
    }
}

async function insertMovie(formData){
    const data = await insert(formData);
    if(data){
        return {
            error: false,
            data,
            message: "Movie inserted successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while inserting the Movie !!"
        };
    }
}

async function updateMovie(id, formData){
    const data = await update(id,formData);
    if(data){
        return {
            error: false,
            data,
            message: "Movie updated successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while updating the Movie !!"
        };
    }
}

async function deleteMovie(id){
    const data = await deleteByID(id);
    if(data){
        return {
            error: false,
            data,
            message: "Movie deleted successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while deleting the Movie !!"
        };
    }
}

module.exports = {getAllMovies, getMovieByID, insertMovie, updateMovie, deleteMovie, checkLogin};