const mongooes = require("mongoose")

const configureDB = function(){
    mongooes.connect("mongodb://127.0.0.1:27017/portfolio")
        .then(()=>{
            console.log("connected to database")
        })
        .catch(()=>{
            console.log("Not connected to database")
        })
}

module.exports = configureDB