const mongoose = require('mongoose');
const password = encodeURIComponent('riddhishwarDataBase1122')
const url = `mongodb+srv://riddhishwar:${password}@cluster0.son3w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
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