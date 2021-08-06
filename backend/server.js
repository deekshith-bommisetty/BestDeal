import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../backend/config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Sever running in ${process.env.NODE_ENV} on port ${PORT}`)
);