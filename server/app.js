import express  from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoutes from "./Route/userRoute.js"
import contactRoute from './Route/contactRoute.js'
import serviceRoute from "./Route/serviceRoute.js"

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use(cookieParser()); // to ensure setup  of token in cookie so that we can pass cookie

app.use(morgan('dev'));




app.use('/ping',(req,res)=>{
    res.send("pong");
});

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/contact',contactRoute);
app.use('/api/v1/service',serviceRoute);


export default app;