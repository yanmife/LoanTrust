const db = require('../../dbconnection');

const Refree = {
    getAllRefree: function (callback) {
        db.query("SELECT * FROM refree", callback);
    },

    getRefreeByid: function(id, callback) {
        db.query("SELECT * FROM refree WHERE refree_id = ?",  [id], callback);
        // function(err, rows) {
        //     const response = rows[0];
        //     return db.query("SELECT * FROM refree WHERE refree.refree_id =?", [rows[0].id], function(err, rows){
        //         response.refree = rows;
        //         callback(err, response);
        //     });
        // });
    },

    addRefree: function(Refree, callback) {
        const dt = new Date();

<<<<<<< HEAD
        return db.query("INSERT INTO refree(firstName, surname, email, phoneNumber, employerAddress, officeBranch, user) VALUES(?,?,?,?,?,?,?)", [Refree.firstName, Refree.surname, Refree.phoneNumber, Refree.email, Refree.employerAddress, Refree.officeBranch, Refree.user, dt], callback);
=======
        return db.query("INSERT INTO refree(firstName, surname, email, phoneNumber , employerAddress, officeBranch, user) VALUES(?,?,?,?,?,?,?)", [Refree.firstName, Refree.surname, Refree.phoneNumber, Refree.email, Refree.employerAddress, Refree.officeBranch, Refree.user, dt], callback);
>>>>>>> 93c957cd5241ff87fc8f202481fa6c68af7a6b63
    },

    deleteRefree: function(id, callback) {
        return db.query("DELETE FROM refree WHERE refree_id = ?", [id], callback);
    },

    updateRefree: function(id, Refree, callback) {
        return db.query("UPDATE refree SET firstName = ?, surname = ?, phoneNumber = ?, email = ?, employerAddress = ?, officeBranch = ? WHERE refree_id = ?", [Refree.firstName, Refree.surname, Refree.phoneNumber, Refree.email, Refree.employerAddress, Refree.officeBranch, id], callback);
    }
};

module.exports = Refree;