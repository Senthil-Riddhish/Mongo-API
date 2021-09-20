const db=require('../Database/db');
const mongoose=require('mongoose');
const book_Model=require('../Models/book.Model');
const helpers=require('../helpers/book_validation');
const book_insertion=async(req,res)=>{
    const{
    "id":id,
    "ISBN":ISBN,
    "name":name,
    "author":author,
    "publications":publications,
    "langauge":langauge,
    "rating":rating,
    "no_of_pages":no_of_pages,
    "price":price,
    "category":category
    }=req.body;
    console.log('inside the router book');
    err_mess=[];
    if(helpers.CheckNull(id)){
        err_mess.push('IS is not valid');
    }
    if(helpers.CheckNull(name)){
        err_mess.push('name is not valid');
    }
    if(helpers.CheckNull(ISBN)){
        err_mess.push('ISBN is not valid');
    }
    console.log(err_mess);
    console.log(category);
    let books=await book_Model.create({
        id:id,
        ISBN:ISBN,
        name:name,
        author:author,
        publications:publications,
        langauge:langauge,
        rating:rating,
        no_of_pages:no_of_pages,
        price:price,
        category:category
    });
};

module.exports={
    book_insertion
};