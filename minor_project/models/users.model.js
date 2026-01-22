const pool = require("../db/mysql");

async function getAll(){
    try{
        const [data, fields] = await pool.query("SELECT * FROM users");
        return data;
    }catch(err){
        return false;
    }
}

async function getByID(id){
    try{
        const [[data], fields] = await pool.query(`SELECT * FROM users WHERE UserID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

async function getByUserName(userName){
    try{
        const [[data], fields] = await pool.query(`SELECT * FROM users WHERE UserName = '${userName}'`);
        return data;
    }catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const [data, fields] = await pool.query(`INSERT INTO users (UserID, UserName, Password) VALUES (NULL, '${formData.UserName}', '${formData.Password}');`);
        return data;
    }catch(err){
        return false;
    }
}

async function update(id, formData){
    try{
        const [data, fields] = await pool.query(`UPDATE users SET UserName = '${formData.UserName}', Password = '${formData.Password}' WHERE UserID = ${id};`);
        return data;
    }catch(err){
        return false;
    }
}

async function deleteByID(id){
    try{
        const [data, fields] = await pool.query(`DELETE FROM users WHERE UserID = ${id}`);
        return data;
    }catch(err){
        return false;
    }
}

module.exports = { getAll, getByID, insert, update, deleteByID, getByUserName };