const express=require('express');
const mongoose=require('mongoose');
const db=require('../Database/db');
const PublicationSchema=mongoose.Schema({
    id:Number,
    name:String,
    contact_number:String,
    email_id:String,
    books_pub: Array,
    authors_assc: Array,
    address:String,
    year_of_estbn:Number,
    revenue:Number
},{
    strict:false
})

const publish=mongoose.model('publications',PublicationSchema);
module.exports=publish;