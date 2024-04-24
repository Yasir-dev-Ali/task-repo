import  express from ("express")
const app =express();
app.use(express.json());



// Databae Connection
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/SignUp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Database Connection Successfully'))
.catch((err)=>console.log(err))


// Routes
import signUpRouter from './Routes/signUp.route'
import signInRouter from './Routes/signIn.route'
app.use('/signUp', signUpRouter)
app.use('/signIn', signInRouter)

// Server
app.listen(3000,()=>{
    console.log('Server are Running ');
    
})