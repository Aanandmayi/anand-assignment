//  TO GET THE COUNT FROM THE JSON FILE THE NUMBER OF TIMES THE API IS HIT 

const fs = require("fs");

// reader function to get the data from the count.json file 
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}

//  function to get the data from the jsonreader asynchronusly
// and eporting the function to be used whenever the user hit the update or add API
async function getCount() {


    return new Promise((resolve, reject) => {
        jsonReader(__dirname + "/Count.json", (err, count) => {
            if (err) {
                console.log(err);
                reject(err)
                return;
            }
            resolve(count);
        });

    }).then((count) => {
        // got the data send it to the executeCOnnection function
        // console.log(count);
        return count.count
    }).catch((err) => {
        // log the error
        console.log("rejected");
        console.log(err);
    })
}

// getCount()

module.exports = getCount;
