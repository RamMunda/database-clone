const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
// Init Middleware
app.use(express.json());
app.get('/',async(req,res)=>{
    res.send({ code :"it's working"});
})

app.get('/api/fault_data',async(req,res)=>{
     fs.readFile('xfaults.json','utf8',(err,data)=>{
         res.send(data);
     })
})
app.get('/api/isc-data',async(req,res)=>{
    fs.readFile('isc-data.json','utf8',(err,data)=>{
        res.send(data);
    })
})
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))