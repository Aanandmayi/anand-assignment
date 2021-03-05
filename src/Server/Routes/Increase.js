var fs = require('fs');
var getCount = require("./Count")


// THIS WOULD INCREASE THE COUNT VALUE IN THE JSON FILE ASYNCHRONUSLY TO THE NUMBER OF TIMES THE API IS HIT
async function increaseCount() {

    return new Promise(async (resolve, reject) => {
        // WOULD GET THE VALUE FROM JSON FILE AND INCRASE IT BY ONE TO SAVE IT AGAIAN
        var count = await getCount()
        console.log(count);
        var data = {
            "count": count + 1
        }
        resolve(data)

    }).then((data) => {
        fs.writeFileSync(__dirname + "/Count.json", JSON.stringify(data, null, 4));
    }).catch((err) => {
        // log the error
        console.log("rejected");
        console.log(err);
    })
}

// EXPORTING THE FUNCTION TO BE USED BY ROUTING APIS
module.exports = increaseCount;
