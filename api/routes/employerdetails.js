const express = require('express');
const router = express.Router();
const EmployerDetails = require("../models/employerDetails");

router.get('/', (req, res, next) => {
    EmployerDetails.getAllEmployerDetails(function(err, rows) {
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
    EmployerDetails.addEmployerDetails(req.body, function(err, result, fields) {
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

router.get('/:detailsId', (req, res, next) => {

    // if(req.params.userId) {

        EmployerDetails.getEmployerDetailsByid(req.params.detailsId, function(err, rows){
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

router.put('/:detailsId', (req, res, next) => {
    EmployerDetails.updateEmployerDetails(req.params.detailsId, req.body, function(err, rows){
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

router.delete('/:detailsId', (req, res, next) => {
    EmployerDetails.deleteEmployerDetails(req.params.detailsId, function(err, count) {

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
