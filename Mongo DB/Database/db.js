const mongoose = require('mongoose');
const url = //
mongoose.connect( url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const dbConn = mongoose.connection;

dbConn.on("error" , console.error.bind(console, "Connection Error"));
dbConn.on("open", function(){
    console.log("DB Connection succesful");
})

module.exports = dbConn;
