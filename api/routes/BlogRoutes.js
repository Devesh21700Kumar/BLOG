const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog');

router.get('/', (req,res,next) => {
    console.log('Get Request initiated');
    Blog.find()
    .select("title content date id imageurl likes comments")
    .exec()
    .then(docs => {
        const response = {
           count : docs.length,
           blogs : docs.map(doc => {
               return {
                   title : doc.title,
                   content : doc.content,
                   id : doc.id,
                   date : doc.date,
                   imageurl : doc.imageurl,
                   likes : doc.likes,
                   comments : doc.comments,
               }
           })
        }
        res.status(200).send(response);
    })
    .catch(err => {
        console.log(err);
        res.header(500).json({message : "DataBase Error sorry ;)"})
    })
})




router.post('/login', (req,res,next) => {
    const blog = new Blog ({
        title : req.body.title,
        content : req.body.content,
        id : new mongoose.Types.ObjectId(),
        date : req.body.date,
        imageurl: req.body.imageurl
        
    });
    blog.save()
    .then(result => {
        res.status(201).json({
            message : "New Blog added Successfully!",
            createdBlog : {
                title : result.title,
                content : result.content,
                id : result.id
            }
        })
        
    }).catch(err => console.log(err));
})

router.patch('/login/:id',  (req,res,next) => {
    const updateOps = req.body;
    // console.log(req.body);
    Blog.findOneAndUpdate({id : req.params.id }, {$set : updateOps})
    .exec()
    .then((result) => {
        console.log(result);
        res.status(200).json({message : "Blog updated"});
        
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : "Iddont exist"});
    })

    


})

router.delete('/login/:id', (req,res,next) => {
    const id = req.params.id;
    Blog.remove({id : id})
    .exec()
    .then(result => {
        console.log(result);
        res.header(204).json({
            message : "Blog deleted",

        })
    })
    .catch(err => console.log(err));
})


module.exports = router;