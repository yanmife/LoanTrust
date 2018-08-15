const express = require('express');
const router = express.Router();
const UserDetails = require("../models/userDetails");

router.get('/', (req, res, next) => {
    UserDetails.getAllUsersDetail(function(err, rows) {
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
});


router.post('/', (req, res, next) => {
    UserDetails.addUsersDetail(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const data = req.body;
            data.id = result.insertId;

            const response = {"_meta":{"status_code": 200}, "data": data};

            res.send(200);
            res.send(response);
        }
    });
});

router.get('/:userId', (req, res, next) => {

    // if(req.params.userId) {

       UserDetails.getUsersDetailByid(req.params.userId, function(err, rows){
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

router.put('/:userId', (req, res, next) => {
    UserDetails.updateUsersDetail(req.params.userId, req.body, function(err, rows){
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

router.delete('/:userId', (req, res, next) => {
    UserDetails.deleteUsersDetail(req.params.userId, function(err, count) {

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