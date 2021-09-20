const express=require('express');
const mongoose=require('mongoose');
const db=require('./Database/db');
const authorRouter=require('./routers/author.Router');
const bookRouter=require('./routers/book.router');
const publishRouter=require('./routers/publications.Router');
const app=express();
app.use(express.json());
port='8080';

app.use('/publications_insert',publishRouter);
app.use('/author',authorRouter);
app.use('/book',bookRouter);

app.listen(port,()=>{console.log(`https://localhost${port}`)})