const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

//Schema
const User = require('../models/User');
const Contact = require('../models/Contact');

//@router       GET api/constacts
//desc          get user contacts
//access        Private
router.get('/',auth, async (req,res)=>{
    try{
        const contacts= await Contact.find({user: req.user.id});
        res.json(contacts)  
    }catch (err){
        console.error(err.message)
        res.status(500).send('Server error')
    }    
});

//@router       POST api/contacts
//desc          Add contacts
//access        Private
router.post('/', [auth, [check('name', 'Name is required').not().isEmpty()]], 
                async (req,res)=>{
                    const errors = validationResult(req);
                    if(!errors.isEmpty()){
                        return res.status(400).json({ errors : errors.array() });
                    }
                    const {name, email, phone, type} = req.body;

                    try{
                        const newContact = new Contact({
                            name: name,
                            email: email,
                            phone: phone,
                            type: type,
                            user: req.user.id
                        });
                        const contact = await newContact.save();
                        res.json(contact)
                    }catch(err){
                        console.error(err.message)
                        res.status(500).send('Server error')
                    }
                }
            );

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