var { executeCreateQuerry } = require("../Database/Connection");
const bodyParser = require('body-parser');
var router = require("express").Router();
var increaseCount = require("./Increase")
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Get query that return data from orders table
router.post('/data', function (req, res) {
    const { id, firstName, lastName, email, phone, TotalMarks } = req.body;
    // CREATE THE SQL QUERRY AND SENDING IT TO THE CONNECTION.JS FILE 
    var sql = "INSERT INTO datatable.studentdetail(id, first_name, last_name, email, phone, totalmarks) VALUES(?);"
    console.log(sql);
    executeCreateQuerry(sql, [id, firstName, lastName, email, phone, TotalMarks])
        .then(function (value) {
            //increase the count of the api HIT
            // Result in JSON format
            console.log(value);
            console.log("done");
            res.sendStatus(200);
            return value;

        }).then(() => {
            console.log("hello");
            increaseCount();
        })
})

module.exports = router;