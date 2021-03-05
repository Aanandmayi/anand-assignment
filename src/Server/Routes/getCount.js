const router = require('./Update');
var getCount = require("./Count")


//get the cout of the values from the count.json file
router.get("/getCount", (req, res) => {
    async function sendCounting() {
        var count = await getCount()
        console.log(count);
        var temp = {
            "count": count
        }
        res.send(JSON.stringify(temp))
    }
    sendCounting();
})

// /send the wrapper function to be use in the api
module.exports = router;
