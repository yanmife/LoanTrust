const db = require('../../dbconnection');
const fs = require('fs');
const md5 = require('md5');

const User = {

    getAllUsers: function (callback) {
        db.query("SELECT * FROM user", callback);
    },

    login: function(User, callback) {
        db.query("SELECT * FROM user WHERE email = ? AND password = ?", [User.email, md5(User.password)], function(err, result, fields){
            if (result.length == 0) {
                return callback('Incorrect User Credentials');
            } else{
                return callback(null, result);
            }
        });
    },
    register: function(User, callback) {
        const dt = new Date();

        db.query("SELECT* FROM user WHERE email = ?", [User.email], function(err, result, fields){
            if(result.length == 0) {
                return db.query("INSERT INTO user(firstName, surname, email, loanAmount, loanDuration, phoneNumber, password) VALUES(?,?,?,?,?,?,?)", [User.firstName, User.surname, User.email, User.loanAmount, User.loanDuration, User.phoneNumber, md5(User.password), dt], callback);
            }else {
                return callback('User Email Already Used');
            }
        });
    }
}

module.exports = User;