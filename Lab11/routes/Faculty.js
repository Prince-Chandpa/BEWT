const express = require('express')
const Faculty = require('../model/Faculty')

const router = express()

router.use(express.json())

router.post("/register", async (req, res) => {
    try {
        const { name, email, department, experience, password, phone } = req.body

        const newFaculty = await Faculty.create({
            name, email, department, experience, password, phone
        })

        res.json({message: "Successfully Faculty Registered",createdFaculty: newFaculty})

    }catch(err){
        res.json({err})
    }
})

router.get("/", async (req, res) => {
    try {
        const Faculty = await Faculty.find()
        res.status(200).json(Faculty)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const Faculty = await Faculty.findById(req.params.id);
        if (!Faculty) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User fetched",
            Faculty: Faculty
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.patch("/update/:id", async (req, res) => {
    try {
        const Faculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!Faculty) {
            return res.status(404).json({ message: "Faculty not found" });
        }
        res.json({
            message: "Update success",
            updatedFaculty: Faculty
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const Faculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!Faculty) {
            return res.json({ message: "not found" });
        }

        res.json({ message: "deleted success", deletedFaculty: Faculty });
    }

    catch (err) {
        res.json({ err });
    }
})

module.exports = router