var express = require('express');
var app = express();
var cors = require('cors')


// Start server and listen on http://localhost:8000/
var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Server listening at http://%s:%s", host, port)
})

//allow using cors
app.use(cors())

var add = require("./Routes/Add")
var update = require("./Routes/Update")
var getCount = require("./Routes/getCount")

app.use("/", add);
app.use("/", update);
app.use("/", getCount)
