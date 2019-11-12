const express = require('express');
const router = express.Router();

//route         GET api/auth
//desc          Get loggedIn user
//access        Private
router.get('/',(req,res)=>{
    res.send('get loggedIn user')
} );

//route         POST api/auth
//desc          auth user with token
//access        public
router.post('/', (req,res)=>{
    res.send('login user')
} );

module.exports= router