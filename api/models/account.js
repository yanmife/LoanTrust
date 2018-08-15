const db = require('../../dbconnection');

const Account = {
    getAllLoanDetails: function (callback) {
        db.query("SELECT * FROM account", callback);
    },

    getLoanDetailsByid: function(id, callback) {
        db.query("SELECT * FROM account WHERE account_id = ?", [id], callback);
    },

    addLoanDetails: function(Account, callback) {
        const dt = new Date();

        return db.query("INSERT INTO account(accountName, accountNumber, branch, sortCode, user) VALUES(?,?,?,?,?)", [ Account.accountName, Account.accountNumber, Account.branch, Account.sortCode, Account.user, dt], callback);
    },

    deleteLoanDetails: function(id, callback) {
        return db.query("DELETE FROM account WHERE account.user = ?", [id], callback);
    },

    updateLoanDetails: function(id, Account, callback) {
        return db.query("UPDATE account SET accountName= ?, accountNumber= ?, branch= ?, sortCode= ? WHERE account.user= ?", [Account.accountName, Account.accountNumber, Account.branch, Account.sortCode, id], callback);
    }
};

module.exports = Account;