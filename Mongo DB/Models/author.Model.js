const express=require('express');
const mongoose=require('mongoose');
const db=require('../Database/db');

var authorSchema=mongoose.Schema({
    id:Number,
    name: String,
    contact_number:String,
    email_id:String,
    age:Number,
    books: Array,
    publisher_assc: Array,
    country:String,
    gender:String,
},{
    strict:false
})

const author=mongoose.model("Author",authorSchema);
module.exports=author;