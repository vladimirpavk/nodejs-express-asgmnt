const express = require('express');
const path = require('path');

const eApp = express();

eApp.use(express.static(path.join(__dirname, 'public')));

eApp.get('/', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './views/home.html'));
})

eApp.get('/users', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './views/users.html'));
})

eApp.get((req,res)=>{
    res.status(404).redirect('/');
})

eApp.listen(3000);