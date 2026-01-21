const express = require("express");
const { getAllUsers, getUserByID, insertUser, updateUser, deleteUser } = require("../services/users.service");

const routeUser = express.Router();

//get all
routeUser.get("/", async (req,res) => {
    const data = await getAllUsers();
    res.send(data);
});

//get by id
routeUser.get("/:id", async (req,res) => {
    const data = await getUserByID(req.params.id);
    res.send(data);
});

//insert
routeUser.post("/", async (req,res) => {
    const data = await insertUser(req.body);
    res.send(data);
});

//edit
routeUser.patch("/:id", async (req,res) => {
    const data = await updateUser(req.params.id, req.body);
    res.send(data);
});

//delete
routeUser.delete("/:id", async (req,res) => {
    const data = await deleteUser(req.params.id);
    res.send(data);
});


module.exports = routeUser;