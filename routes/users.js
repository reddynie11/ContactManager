const express = require('express');

const router = express.Router();

//Schema
const User = require('../models/User');

//@router       POST api/users
//desc          Register a user
//access        Public
router.post('/',(req,res)=>{
    res.send(req.body)
});

module.exports= router;