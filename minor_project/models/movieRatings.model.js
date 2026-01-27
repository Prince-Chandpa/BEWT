const pool = require("../db/mysql");

async function getAll(){
    try{
        const [data, fields] = await pool.query("SELECT * FROM movie_rating");
        return data;
    }catch(err){
        return false;
    }
}

async function getByID(id){
    try{
        const [[data], fields] = await pool.query(`SELECT * FROM movie_rating WHERE RatingID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const [data, fields] = await pool.query(`INSERT INTO movie_rating (RatingID, MovieID, UserID, RatingStar, RatingComment) VALUES (NULL, '${formData.MovieID}', '${formData.UserID}', '${formData.RatingStar}', '${formData.RatingComment}');`);
        return data;
    }catch(err){
        return false;
    }
}

async function update(id, formData){
    try{
        const [data, fields] = await pool.query(`UPDATE movie_rating SET RatingStar = '${formData.RatingStar}', RatingComment = '${formData.RatingComment}' WHERE RatingID = ${id};`);
        return data;
    }catch(err){
        return false;
    }
}

async function deleteByID(id){
    try{
        const [data, fields] = await pool.query(`DELETE FROM movie_rating WHERE RatingID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

module.exports = { getAll, getByID, insert, update, deleteByID };