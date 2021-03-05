// THIS API WOULD UPDATE THE DETAILS OF THE ID PROVIDED 

var { executeUpdateQuerry } = require("../Database/Connection");
const bodyParser = require('body-parser');
var router = require("express").Router();
var increaseCount = require("./Increase")

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Get query that return data from orders table
router.post('/update', function (req, res) {

    // GET THE VALUES FROM THE REACT FORM HERE 
    const { id, firstName, lastName, email, phone, TotalMarks } = req.body;

    //CREATE A SQL STATEMENT TO UPDATE THE DATABASE
    var sql = "UPDATE datatable.studentdetail SET first_name = ?, last_name = ?, email = ?, phone = ?,totalmarks = ? WHERE (id = ?);"
    executeUpdateQuerry(sql, [firstName, lastName, email, phone, TotalMarks, id])
        .then(function (value) {
            console.log(value);
            console.log("done");
            res.sendStatus(200); // Result in JSON format
            //increase the count of the api HIT 
            increaseCount();
            console.log("hello");
        });
})

module.exports = router;