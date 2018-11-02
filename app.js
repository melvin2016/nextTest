const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp.prepare()
    .then(()=>{
        const app = express();
        app.get('/posts/:id',(req,res)=>{
            nextApp.render(req,res,'/posts',{id:req.params.id});
        })
        app.get(['/search/:show','/'],(req,res)=>{
            nextApp.render(req,res,'/index',{show:req.params.show !== ''?req.params.show:"batman"});
        });
        app.get('/about',(req,res)=>{
            nextApp.render(req,res,'/about');
        });
        app.get('*',(req,res)=>{
            return handle(req,res);
        });
        
        app.listen('3000',()=>{
            console.log('Server running on port : 3000');
        });
    })
    .catch((err)=>{
        console.log(err);
    })