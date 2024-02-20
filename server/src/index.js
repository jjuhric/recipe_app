import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {UserRouter} from './routes/users.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", UserRouter);

mongoose.connect("mongodb+srv://jjuhric:Il0v3N1c0l3@recipe.ouafkr7.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => {console.log("Server is running on port 3001")});