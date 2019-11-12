const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
//Schema
const User = require('../models/User');

//@router       POST api/users
//desc          Register a user
//access        Public
router.post('/',
            [
                check('name','Name is required').not().isEmpty(),
                check('email','Enter a valid email').isEmail(),
                check('password','password should be min. 6 charcters').isLength({min: 6})
            ],
            (req,res)=>{
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({ errors : errors.array() });
                }
                res.send(req.body)
            });

module.exports= router;