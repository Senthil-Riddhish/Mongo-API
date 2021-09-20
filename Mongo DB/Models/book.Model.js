const express=require('express');
const db=require('../Database/db');
const mongoose=require('mongoose');

const book=mongoose.Schema({
    id:Number,
    ISBN:String,
    name:String,
    author:Array,
    publications:Array,
    langauge:String,
    rating:Number,
    no_of_pages:Number,
    price:Number,
    category:Array
},{
    strict:false
});

const books=mongoose.model('book',book);
module.exports=books;

