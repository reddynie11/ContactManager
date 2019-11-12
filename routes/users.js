const express = require('express');
const bcrypt = require('bcryptjs');

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
            async (req,res)=>{
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({ errors : errors.array() });
                }
                const {name, email, password} = req.body;
                try{
                    let user = await User.findOne({ email : email });
                    if (user){
                        return res.status(400).json({msg : 'User already exists'});
                    }
                    user = new User({
                        name: name,
                        email: email,
                        password: password
                    });
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(password, salt);
                    await user.save()
                    res.send(user) 
                } catch (err) {
                    console.error(err.message)
                    res.send('error')
                }

                res.send(req.body)
            });

module.exports= router;