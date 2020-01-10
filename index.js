const express = require('express');
const mongoose = require('mongoose');
const resturantRouter = require('./routes/resturants');
const super7Router = require('./routes/super');
const memeberRouter = require('./routes/newmembers');
const sweetRouter  = require('./routes/sweets');
const alcoholRouter = require('./routes/alcohol');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/user');
const cors = require('cors')

mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((db) =>
{
console.log("Sucessfully connected mongodb server");
})

const app = express();
app.options('*',cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use('/user',userRouter);
app.use('/upload', uploadRouter);
app.use('/Resturants',resturantRouter); 
app.use('/super7',super7Router); 
app.use('/members', memeberRouter)
app.use('/sweets', sweetRouter);
app.use('/alcohol', alcoholRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

