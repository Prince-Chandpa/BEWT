const { getAll, getByID, insert, update, deleteByID } = require("../models/users.model");

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

module.exports = {getAllUsers, getUserByID, insertUser, updateUser, deleteUser};