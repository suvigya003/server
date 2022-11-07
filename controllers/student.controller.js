const db = require("../models");
const Student = db.student;

exports.create = async (req, res) => {
    try{
        const student = await Student.create(req.body);
        res.send(student);
    }catch(error){
        console.log(error);
    }
};

exports.findAll = async (req, res) => {
    try{
        const students = await Student.findAll();
        res.send(students);
    }catch(error){
        console.log(error);
    }
}

// exports.findByUser = async (req, res) => {
//     try{
//         const order = await Order.findAll
//         ({
//             where: {
//                 userId: req.params.id
//             }
//         });
//         res.send(order);
//     }catch(error){
//         console.log(error);
//     }
// }