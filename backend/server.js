import express from "express";
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();

const app=express();

const PORT=process.env.PORT || 8000;

app.get("/api/products",(req, res) => 
{
    res.json(products);
});

app.get("/api/products/:id",(req, res) => 
{
    const product = products.find(product => product._id === req.params.id);
    res.send(product);
});

app.listen(PORT,()=>
{
    console.log(`\nlistening in ${process.env.NODE_ENV} mode on ${PORT}\n`);
});