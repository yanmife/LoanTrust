const mysql = require("mysql");

Create Connection
const db = mysql.createConnection({
    host : "us-cdbr-iron-east-01.cleardb.net",
    user : "bb5860e1800559",
    password : "5f1436e6",
    database : "heroku_2e5ea325b630181"
    
});

//const db = mysql.createConnection({
  //  host : "localhost",
   // user : "root",
   // password : "",
   // database : "Loan-trust_db"
//});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...")
});

setInterval(function () {
    db.query('SELECT 1');
}, 86400);

module.exports = db;


