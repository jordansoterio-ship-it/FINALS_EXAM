const express=require('express');
const cors=require('cors');
require('dotenv').config();
//const db=require('./config/db');
const routes=require('./routes');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //POST for DOM body parser
app.use('/api', routes);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});