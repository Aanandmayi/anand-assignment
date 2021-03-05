
// This file would get the connection from the database.
// Execute the querry Asynchronusly 

// include the connection object we created with the connection Congif
var connection = require("./ConnectionPool")

// wrapper to wrap a funnctoion to execute the querry 
// this would return a promise that can be executed assyncronusly
async function executeUpdateQuerry(query, values) {

    return new Promise((resolve, reject) => {
        connection.getConnection((err, connection) => {
            if (err) {
                console.log("unable to connect to mysql server");
            }

            else {
                connection.query(query, values, (err, result) => {
                    if (err) {
                        // an error in executing the querry
                        console.log(err);

                        //reject the promise
                        reject(err);
                    } else {
                        //got the result send it to the .then func.
                        resolve(result)
                    }
                }) // end of conn query 
            }

            //release the connection
            connection.release();
        })

    }).then((responsedata) => {
        // got the data send it to the executeCOnnection function
        return responsedata
    }).catch((err) => {
        // log the error
        console.log("rejected");
        console.log(err);
    })
}

async function executeCreateQuerry(query, values) {

    return new Promise((resolve, reject) => {
        connection.getConnection((err, connection) => {
            if (err) {
                console.log("unable to connect to mysql server");
            }

            else {
                connection.query(query, [values], (err, result) => {
                    if (err) {
                        // an error in executing the querry
                        console.log(err);

                        //reject the promise
                        reject(err);
                    } else {
                        //got the result send it to the .then func.
                        resolve(result)
                    }
                }) // end of conn query 
            }

            //release the connection
            connection.release();
        })

    }).then((responsedata) => {
        // got the data send it to the executeCOnnection function
        return responsedata
    }).catch((err) => {
        // log the error
        console.log("rejected");
        console.log(err);
    })
}

module.exports = { executeUpdateQuerry, executeCreateQuerry };