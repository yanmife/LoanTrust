const db = require('../../dbconnection');

const UserDetails = {
    getAllUsersDetail: function (callback) {
        db.query("SELECT * FROM userdetails LEFT JOIN user ON userdetails.user = user.user_id", callback);
    },

    getUsersDetailByid: function(id, callback) {
        db.query("SELECT * FROM userdetails LEFT JOIN user ON userdetails.user = user.user_id WHERE userdetails.user = ?", [id], callback);
        
    },

    getUsersDetailcomplete: function(id, callback) {
        db.query("SELECT * FROM userdetails LEFT JOIN user ON userdetails.user = user.user_id LEFT JOIN employer_details ON employer_details.user = user.user_id LEFT JOIN account ON account.user = user.user_id LEFT JOIN next_of_kin ON next_of_kin.user = user.user_id LEFT JOIN refree ON refree.user = user.user_id WHERE user.user_id = ?", [id], callback);
        
    },

    addUsersDetail: function(UserDetails, callback) {
        const dt = new Date();

        return db.query("INSERT INTO userdetails(title, bvn, gender, birthDate, dependants, children, education, idMeans, homeAddress, landmark, busStop, lga, stayLength, accomodationType, previousAddress, maritalStatus, user) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [UserDetails.title, UserDetails.bvn, UserDetails.gender, UserDetails.idMeans, UserDetails.birthDate, UserDetails.dependants, UserDetails.children, UserDetails.education, UserDetails.homeAddress, UserDetails.landmark, UserDetails.busStop, UserDetails.lga, UserDetails.stayLength, UserDetails.accomodationType, UserDetails.previousAddress, UserDetails.maritalStatus, UserDetails.user, dt], callback);
    },

    deleteUsersDetail: function(id, callback) {
        return db.query("DELETE FROM userdetails WHERE userDetails.user = ?", [id], callback);
    },

    updateUsersDetail: function(id, UserDetails, callback) {
        return db.query("UPDATE userdetails SET title =?, bvn =?, gender =?, birthDate =?, dependants =?, children =?, education =?, idMeans =?, homeAddress =?, landmark =?, busStop =?, lga =?, stayLength =?, accomodationType =?, previousAddress =?, maritalStatus =? WHERE userdetails.user = ?", [UserDetails.title, UserDetails.bvn, UserDetails.gender, UserDetails.idMeans, UserDetails.birthDate, UserDetails.dependants,UserDetails.children, UserDetails.education, UserDetails.homeAddress, UserDetails.landmark, UserDetails.busStop, UserDetails.lga, UserDetails.stayLength, UserDetails.accomodationType, UserDetails.previousAddress, UserDetails.maritalStatus, id], callback);
    }
};

module.exports = UserDetails;
