module.exports = (app) => {
    const student = require('../controllers/student.controller.js');

    const router = require('express').Router();
    
    router.post("/addStudent", student.create);
    router.get("/getStudent", student.findAll);

    app.use("/api/student", router);
}