import express from "express";
import data from "./data.js";
import { Link, useParams } from "react-router-dom";
const app=express();

app.get('/api/product',(req, res)=>{
    res.send(data.products);
});
app.get('/', (req, res)=>{
    res.send('gbe won sare bi sony')
});
const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`server at http://172.20.10.3:3000`);
});
app.get('/api/products/:id', (req, res)=>{
  const product = data.products.find((x)=>x._id===req.params.id)
    if (product){res.send(product)}
    else{
        res.status(404).send({message: 'product not found'});
    }
});

