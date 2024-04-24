import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app =express();
app.use(express.json());



// Database Connection
const mongooUrl="mongodb://localhost:27017/user-athuntication";
mongoose.connect(mongooUrl);
const connectDb=mongoose.connection;

    connectDb.on('open',()=>{
        console.log("Database is connected");
    });
    connectDb.on('error',(err)=>{
        console.log("Error",err);
    });



// Routes
import signUpRouter from './Routes/signUp.route'
import signInRouter from './Routes/signIn.route'
app.use('/signUp', signUpRouter)
app.use('/signIn', signInRouter)

// Server
app.listen(3000,()=>{
    console.log('Server are Running ');
    
})