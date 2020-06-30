const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

const Admin = require('../models/admin');

router.post('/signup', (req,res,next) => {
    bcrypt.hash(req.body.password, 10, (err,hash) => {
        if(err){
            return res.status(500).json({
                error : err
            });
        }
        else {
            const admin = new Admin({
                id : mongoose.Types.ObjectId(),
                username : req.body.username,
                password : hash
            })
            admin.save()
            .then(result => res.status(201).json({
                msg : "admin created",
                result : result
            }))
            .catch()
        }
    })
})

router.get('/login', (req,res,next) => {
    Admin.find()
    .select("username id password")
    .exec()
    .then(docs => {
        console.log(docs[0].password);
        const response = {
            count : docs.length,
            admins : docs.map(doc => {
                return {
                    username : doc.username,
                    password : doc.password,
                    id : doc.id
                }
            }),
        }
        res.status(200).json(response)
    })
    .catch(err => console.log(err));
})











module.exports = router;