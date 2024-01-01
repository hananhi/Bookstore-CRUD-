
import express from 'express'
import cors from 'cors'
import {errorHandiling}from './middilewares/errorMiddileware.js'
import { fetchData } from './controllers/fetchController.js';
import bookRoutes from './Routes/bookRoutes.js';
const app=express();


app.use(cors());

app.use(express.json());

fetchData();

app.use('/books',bookRoutes);
app.use(errorHandiling);

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
     }});


const PORT= process.env.PORT ||3000 ;
app.listen(PORT,()=>{
    console.log('server listening')
})

export default app