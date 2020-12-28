const express = require('express')

const router = express.Router();

const products = [];


router.get('/selectProducts',(req, res, next)=> {
   res.json({
       test: "node server seems to be resulting with json file"
   })
    })
    
    
    //order here matter
    router.post('/addProduct',(req, res, next)=> {

   products.push({
       title: req.body.title
   })
   res.send("<h1>Post products</h1>")



    })

exports.router = router;
exports.products = products;