const express = require('express');
const router = express.Router();
const NextOfKin = require("../models/next-of-kin");

router.get('/', (req, res, next) => {
    NextOfKin.getAllNextOfKin(function(err, rows) {
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
    NextOfKin.addNextOfKin(req.body, function(err, result, fields) {
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

router.get('/:nextOfKinId', (req, res, next) => {

    // if(req.params.userId) {

        NextOfKin.getNextOfKinByid(req.params.nextOfKinId, function(err, rows){
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

router.put('/:nextOfKinId', (req, res, next) => {
    NextOfKin.updateNextOfKin(req.params.nextOfKinId, req.body, function(err, rows){
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

router.delete('/:nextOfKinId', (req, res, next) => {
    NextOfKin.deleteNextOfKin(req.params.nextOfKinId, function(err, count) {

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
