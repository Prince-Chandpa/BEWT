const { getAll, getByID, insert, update, deleteByID, getByUserName } = require("../models/users.model");
const jwt = require("jsonwebtoken");

async function getAllUsers(){
    const data = await getAll();
    if(data){
        return {
            error: false,
            data,
            message: "Users fetched successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while fetching the users !!"
        };
    }
}

async function getUserByID(id){
    const data = await getByID(id);
    if(data){
        return {
            error: false,
            data,
            message: "User fetched successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while fetching the user !!"
        };
    }
}

async function checkLogin(formData){
    const data = await getByUserName(formData.UserName); 
    if(data){
        if(data.Password === formData.Password){
            const token = jwt.sign(data, process.env.PRIVATEKEY, { expiresIn: '1h' })
            return {
                error: false,
                data: token,
                message: "User loged in successfully"
            };
        }
        return {
            error: true,
            message: "User Name or Password does not match !!"
        };
    }else{
        return {
            error: true,
            message: "User Name or Password does not match !!"
        };
    }
}

async function insertUser(formData){
    const data = await insert(formData);
    if(data){
        return {
            error: false,
            data,
            message: "User inserted successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while inserting the user !!"
        };
    }
}

async function updateUser(id, formData){
    const data = await update(id,formData);
    if(data){
        return {
            error: false,
            data,
            message: "User updated successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while updating the user !!"
        };
    }
}

async function deleteUser(id){
    const data = await deleteByID(id);
    if(data){
        return {
            error: false,
            data,
            message: "User deleted successfully"
        };
    }else{
        return {
            error: true,
            message: "Some error occured while deleting the user !!"
        };
    }
}

module.exports = {getAllUsers, getUserByID, insertUser, updateUser, deleteUser, checkLogin};