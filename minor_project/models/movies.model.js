const pool = require("../db/mysql");

async function getAll(){
    try{
        const [data, fields] = await pool.query("SELECT * FROM movies");
        return data;
    }catch(err){
        return false;
    }
}

async function getByID(id){
    try{
        const [[data], fields] = await pool.query(`SELECT * FROM movies WHERE MovieID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

async function getByMovieName(movieName){
    try{
        const [[data], fields] = await pool.query(`SELECT * FROM movies WHERE MovieName = '${movieName}'`);
        return data;
    }catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const [data, fields] = await pool.query(`INSERT INTO movies (MovieID, MovieName, MovieImage) VALUES (NULL, '${formData.MovieID}', '${formData.MovieName}', '${formData.MovieImage}');`);
        return data;
    }catch(err){
        return false;
    }
}

async function update(id, formData){
    try{
        const [data, fields] = await pool.query(`UPDATE movies SET MovieName = '${formData.MovieName}', MovieImage = '${formData.MovieImage}' WHERE MovieID = ${id};`);
        return data;
    }catch(err){
        return false;
    }
}

async function deleteByID(id){
    try{
        const [data, fields] = await pool.query(`DELETE FROM movies WHERE MovieID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

module.exports = { getAll, getByID, insert, update, deleteByID, getByMovieName };