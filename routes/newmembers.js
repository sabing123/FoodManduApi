const express = require('express');
const members = require('../model/NewMembers');

const router = express.Router();

router.route('/')
    .get((req,res,next)=>{
        members.find()
        .then((member)=>{
            res.json(member);
        }).catch(next);
})

.post((req,res,next)=>{
    members.create(req.body)
    .then((member)=>{
        res.json(member);
    }).catch(next);
});


router.route('/:id/foods')
.get((req,res,next) =>{
    members.findById(req.params.id)
    .then((member)=>{
        res.json(member.food);
    }).catch(next);
})

.post((req,res,next)=>{
    members.findById(req.params.id)
        .then((member) =>{
            member.food.push(req.body);
            member.save()
            .then((member) => {
        res.json(member);
        })
    }).catch(next);
});

module.exports = router;