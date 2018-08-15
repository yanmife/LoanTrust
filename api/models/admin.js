const db = require('../../dbconnection');
const fs = require('fs');
const md5 = require('md5');

const Admins = {

    getAllAdmins: function (callback) {
        db.query("SELECT * FROM Admin", callback);
    },

    login: function(Admins, callback) {
        db.query("SELECT * FROM Admin WHERE email = ? AND password = ?", [Admins.email, md5(Admins.password)], function(err, result, fields){
            if (result.length == 0) {
                return callback('Incorrect Login Credentials');
            } else{
                return callback(null, result);
            }
        });
    },
    register: function(Admins, callback) {
        const dt = new Date();

        db.query("SELECT * FROM Admin WHERE email = ?", [Admins.email], function(err, result, fields){
            if(result.length == 0) {
                return db.query("INSERT INTO Admin(email, password, created_at) VALUES(?,?,?)", [Admins.email, md5(Admins.password), dt], callback);
            }else {
                return callback('User Email Already Used');
            }
        });
    }
}

module.exports = Admins;