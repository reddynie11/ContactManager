const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

//Schema
const User = require('../models/User');

const router = express.Router();

//route         GET api/auth
//desc          Get loggedIn user
//access        Private
router.get('/',auth, async (req,res)=>{
    try{
        let user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch (err){
        console.error(err.message)
        res.status(500).send('Server error')
    }
} );

//route         POST api/auth
//desc          auth user with token
//access        public
router.post('/', 
            [
                check('email', 'Enter an email').isEmail(),
                check('password', 'Please enter password').exists()
            ], 
            async (req,res)=>{
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({ errors : errors.array() });
                }
                const { email, password } = req.body;

                try{
                    let user = await User.findOne({ email : email})
                    if(!user){
                        return res.status(400).json({msg: 'Invalid email'});
                    }

                    let isMatch = await bcrypt.compare(password, user.password);
                    if(!isMatch){
                        return res.status(400).json({msg: 'Invalid password'})
                    } 

                    const payload = {
                        user:{
                            id: user.id
                        }
                    }
                    jwt.sign(payload, 
                        config.get('jwtSecret'), 
                        { expiresIn : 7200}, 
                        (err,token)=>{
                            if (err) throw err;
                            res.json({token})
                        }
                    )
                }catch (err){
                    console.error(err.message)
                    res.status(500).send('Server error')
                }   
            } );

module.exports= router