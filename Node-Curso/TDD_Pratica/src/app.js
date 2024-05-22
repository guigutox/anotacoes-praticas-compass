
let express = require("express");
let app = express();

app.get("/", (req, res) => {
    
    res.json({sucess: true});

})

module.exports = app;