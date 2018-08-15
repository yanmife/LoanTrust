const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const db = require("./dbconnection");

// const userdetailsRoutes = require('./api/routes/userdetails');
// const refreeRoutes = require('./api/routes/refrees');
// const nextOfKinRoutes = require('./api/routes/nextOfKin');
const adminRoutes = require('./api/routes/admins');
const userRoutes = require('./api/routes/users');
// const employerdetailsRoutes = require('./api/routes/employerdetails');
// const db_connection = require('db_connection');



app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
     if (req.method === "OPTIONS") {
         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});


app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
// app.use('/next-of-kin', nextOfKinRoutes);
// app.use('/account', accountRoutes);
// app.use('/userdetails', userdetailsRoutes);
// app.use('/employerdetails', employerdetailsRoutes);


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;