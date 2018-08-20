const db = require('../../dbconnection');

const EmployerDetails = {
    getAllEmployerDetails: function (callback) {
        db.query("SELECT * FROM employer_details", callback);
    },

    getEmployerDetailsid: function(id, callback) {
        db.query("SELECT * FROM employer_details  WHERE employer_details_id = ?", [id], callback);
    },

    addEmployerDetails: function(EmployerDetails, callback) {
        const dt = new Date();

        return db.query("INSERT INTO employer_details(primaryEmployer, primaryEmployer-Email, secondaryemployerAddress, payDate, primary_employer_address, official_email_secondary_employer, resumption_branch, landmark, lga, year_of_employment, idNumber, employmentTime, netMonthlyIncome, user) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [EmployerDetails.primary_employer_address, EmployerDetails.primaryEployer, EmployerDetails.primaryEmployer_email, EmployerDetails.secondaryemployerAddress, EmployerDetails.payDate, EmployerDetails.official_email_secondary_employer, EmployerDetails.resumption_branch, EmployerDetails.landmark, EmployerDetails.lga, EmployerDetails.year_of_employment, EmployerDetails.idNumber, EmployerDetails.employmentTime, EmployerDetails.netMonthlyIncome, EmployerDetails.user, dt], callback);
    },

    deleteEmployerDetails: function(id, callback) {
        return db.query("DELETE FROM employer_details WHERE employer_details_id = ?", [id], callback);
    },

    updateEmployerDetails: function(id, EmployerDetails, callback) {
        return db.query("UPDATE employer_details SET primary_employer_address =?, official_email_secondary_employer =?, resumption_branch =?, landmark =?, lga =?, year_of_employment =?, primaryEmployer =?, primaryEmployer_email= ?, secondaryemployerAddress =?, payDate =?, idNumber =?, employmentTime =?, netMonthlyIncome =? WHERE employer_details_id = ?", [EmployerDetails.primary_employer_address, EmployerDetails.official_email_secondary_employer, EmployerDetails.primaryEmployer, EmployerDetails.primaryEmployer_email, EmployerDetails.secondaryemployerAddress, EmployerDetails.payDate, EmployerDetails.resumption_branch, EmployerDetails.landmark, EmployerDetails.local_government, EmployerDetails.year_of_employment, EmployerDetails.idNumber, EmployerDetails.employmentTime, EmployerDetails.netMonthlyIncome, id], callback);
    }
};

module.exports = EmployerDetails;
