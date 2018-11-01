const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp.prepare()
    .then(()=>{
        const app = express();

        app.get('*',(req,res)=>{
            return handle(req,res);
        });
        app.get('/posts/:name',(req,res)=>{
            nextApp.render(req,res,'/posts',{title:req.params.name});
        })

        app.listen('3000',()=>{
            console.log('Server running on port : 3000');
        });
    })
    .catch((err)=>{
        console.log(err);
    })