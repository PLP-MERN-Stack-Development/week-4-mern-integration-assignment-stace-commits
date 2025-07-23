import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import cors from 'cors';

dotenv.config(); // Load .env file

const app = express();

// connect to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/posts', postRoutes);

// start the server
app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
