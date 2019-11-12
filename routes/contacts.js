const express = require('express');
const router = express.Router();

//@router       GET api/constacts
//desc          get user contacts
//access        Private
router.get('/',(req,res)=>{
    res.send('get all user contacts')
});

//@router       POST api/contacts
//desc          Add contacts
//access        Private
router.get('/',(req,res)=>{
    res.send('Add contacts')
});

//@router       PUT api/contacts/:id
//desc          update contact
//access        Private
router.put('/:id',(req,res)=>{
    res.send('update contacts')
});

//@router       DELETE api/contacts/:id
//desc          delete contact
//access        Private
router.delete('/:id',(req,res)=>{
    res.send('delete contacts')
});

module.exports= router;