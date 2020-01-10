const express = require('express');
const super7 = require('../model/super7');

const router = express.Router();

router.route('/')
    .get((req,res,next)=>{
        super7.find()
        .then((supers)=>{
            res.json(supers);
        }).catch(next);
})

.post((req,res,next)=>{
    super7.create(req.body)
    .then((supers)=>{
        res.json(supers);
    }).catch(next);
});


router.route('/:id/foods')
.get((req,res,next) =>{
    super7.findById(req.params.id)
    .then((supers)=>{
        res.json(supers.food);
    }).catch(next);
})

.post((req,res,next)=>{
    super7.findById(req.params.id)
        .then((supers) =>{
            supers.food.push(req.body);
                supers.save()
            .then((supers) => {
        res.json(supers);
        })
    }).catch(next);
});

module.exports = router;