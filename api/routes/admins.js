const express = require('express');
const router = express.Router();
const Admins = require("../models/admin");

router.post('/register', function(req, res, next){
    Admins.registration(req.body, function(err, result){
        if (err) {
            const reponse = {"_meta":{"status_code": 401, "message": err}};

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
    Admins.login(req.body, function(err, result){
        
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
    Admins.getAllAdmins(function(err, rows) {
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


module.exports = router;