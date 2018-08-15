const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Account = require("../models/account");
const EmployerDetails = require("../models/employerDetails");
const NextOfKin = require("../models/next-of-kin");
const Refree = require("../models/refree");
const UserDetails = require("../models/userDetails");


router.post('/register', function(req, res, next){
    User.register(req.body, function(err, result){
        if (err) {
            const response = {"_meta":{"status_code": 401, "message": err}};

            res.status(401);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.post('/login', function(req, res, next) {
    User.login(req.body, function(err, result){
        
        if(err) {

            const response = {"_meta": {"status_code": 404, "message": err}};

            res.status(404);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});

router.get('/', function(req, res, next){
    User.getAllUsers(function(err, result) {
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});


router.get('/usersdetail/complete/:id', function(req, res, next){
    UserDetails.getUsersDetailcomplete(function(err, result) {
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});


router.get('/usersdetail', (req, res, next) => {
    UserDetails.getAllUsersDetail(function(err, result) {
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});



router.post('/userdetails', (req, res, next) => {
    UserDetails.addUsersDetail(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            // const data = req.body;
            // data.id = result.insertId;

            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.get('/userdetail/:id', (req, res, next) => {

    // if(req.params.userId) {

       UserDetails.getUsersDetailByid(req.params.id, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.put('/userdetail/:id', (req, res, next) => {
    UserDetails.updateUsersDetail(req.params.id, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const data = req.body;
            
            const response = {"_meta":{"status_code": 200}, "data": data};

            res.send(200);
            res.send(response);
        }
    });
});

router.delete('/userdetail/:id', (req, res, next) => {
    UserDetails.deleteUsersDetail(req.params.id, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});

router.post('/refree', (req, res, next) => {
    Refree.addRefree(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.get('/refree/:id', (req, res, next) => {

    // if(req.params.userId) {

       Refree.getRefreeByid(req.params.id, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            
            const response = {"_meta": {"status_code": 200}, "data": rows};

            res.status(200);
            res.json(response);
        }
        });
    //  }
    
});

router.put('/refree/:id', (req, res, next) => {
    Refree.updateRefree(req.params.id, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.delete('/refree/:id', (req, res, next) => {
    Refree.deleteRefree(req.params.id, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});


router.post('/nextofkin', (req, res, next) => {
    NextOfKin.addNextOfKin(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.get('/nextofkin/:id', (req, res, next) => {

    // if(req.params.userId) {

        NextOfKin.getNextOfKinByid(req.params.id, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.put('/nextofkin/:id', (req, res, next) => {
    NextOfKin.updateNextOfKin(req.params.id, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const data = req.body;
            
            const response = {"_meta":{"status_code": 200}, "data": data};

            res.send(200);
            res.send(response);
        }
    });
});

router.delete('/nextofkin/:id', (req, res, next) => {
    NextOfKin.deleteNextOfKin(req.params.id, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});

router.post('/employerdetails', (req, res, next) => {
    EmployerDetails.addEmployerDetails(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 401, "message": err}};

            res.status(401);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.get('/employerdetails/:id', (req, res, next) => {

    // if(req.params.userId) {

        EmployerDetails.getEmployerDetailsid(req.params.id, function(err, rows){
            // (req.params.id, function(err, rows){
                if(err) {
                    const response = {"_meta": {"status_code":404, "message": err}};
        
                    res.status(417);
                    res.send(response);
               } else {
                const response = {"_meta": {"status_code": 200}, "data": rows};
        
                res.status(200);
                res.send(response);
                    }
        });
    //  }
    
});

router.put('/employerdetails/:id', (req, res, next) => {
    EmployerDetails.updateEmployerDetails(req.params.id, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 401, "message": err}};

            res.status(401);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.delete('/employerdetails/:id', (req, res, next) => {
    EmployerDetails.deleteEmployerDetails(req.params.id, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});

router.post('/account', (req, res, next) => {
    Account.addLoanDetails(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 401, "message": err}};

            res.status(401);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.get('/account/:id', (req, res, next) => {

    // if(req.params.userId) {

        Account.getLoanDetailsByid(req.params.id, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.put('/account/:id', (req, res, next) => {
    Account.updateLoanDetails(req.params.id, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 401, "message": err}};

            res.status(401);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": req.body};

            res.status(200);
            res.json(response);
        }
    });
});

router.delete('/account/:id', (req, res, next) => {
    Account.deleteLoanDetails(req.params.id, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});


module.exports = router;