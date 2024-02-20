import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {UserRouter} from './routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/auth", UserRouter);
mongoose.connect(process.env.MONGODB_URI)

app.listen(3001, () => {console.log("Server is running on port 3001")});