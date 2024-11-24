import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app=express();

app.use("/api/products",productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>
{
    console.log(`\nlistening in ${process.env.NODE_ENV} mode on ${PORT}\n`.yellow.bold);
});