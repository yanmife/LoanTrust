const db = require('../../dbconnection');

const NextOfKin = {
    getAllNextOfKin: function (callback) {
        db.query("SELECT * FROM next_of_kin", callback);
    },

    getNextOfKinByid: function(id, callback) {
        db.query("SELECT * FROM next_of_kin WHERE next_of_kin_id = ?", [id], callback);
    },

    addNextOfKin: function(NextOfKin, callback) {
        const dt = new Date();

        return db.query("INSERT INTO next_of_kin(firstName, surname, relationship, homeAddress, email, user, phoneNumber) VALUES(?,?,?,?,?,?,?)", [NextOfKin.firstName, NextOfKin.surname, NextOfKin.relationship, NextOfKin.homeAddress, NextOfKin.email, dt], callback);
    },

    deleteNextOfKin: function(id, callback) {
        return db.query("DELETE FROM next_of_kin WHERE next_of_kin.user = ?", [id], callback);
    },

    updateNextOfKin: function(id, NextOfKin, callback) {
        return db.query("UPDATE next_of_kin SET firstName= ?, surname= ?, relationship= ?, homeAddress= ?, email= ?, phoneNumber= ?, user= ?, WHERE next_of_kin_id = ?", [NextOfKin.firstName, NextOfKin.surname, NextOfKin.relationship, NextOfKin.homeAddress, NextOfKin.email, NextOfKin.phoneNumber, NextOfKin.user, id], callback);
    }
};

module.exports = NextOfKin;
