const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const book_controllers=require('../controllers/Book.controllers');
console.log('inside the book');
router.post('/',book_controllers.book_insertion);

module.exports=router;