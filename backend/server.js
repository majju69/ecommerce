import express from "express";
import products from './data/products.js';

const app=express();

const port=8000;

app.get("/api/products",(req, res) => 
{
    res.json(products);
});

app.get("/api/products/:id",(req, res) => 
{
    const product = products.find(product => product._id === req.params.id);
    res.send(product);
});

app.listen(port,()=>
{
    console.log(`\nlistening on ${port}\n`);
});