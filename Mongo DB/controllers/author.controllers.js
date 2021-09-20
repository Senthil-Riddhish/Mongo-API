const express=require('express');
const mongoose=require('mongoose');
const authorModels=require('../Models/author.Model');
const book_Models=require('../Models/book.Model');
const db_conn=require('../Database/db');
const{
    CheckNull,
    checkEmail,
    checkNumber,
    checkGender
}=require('../helpers/validation');

/*
@route /author
@description "INSERTING AUTHORS" 
@params - ROUTE PARAMS
@return_type JSON object
@content type text/JSON
*/

const author=async(req,res)=>{
    const{
        authorData
    }=req.body;
    var error_msg=[];
    console.log("inside author");
    if(CheckNull(authorData.id)){
        error_msg.push("invalid id");
    }
    console.log(authorData);
    if(checkEmail(authorData.email)){
        error_msg.push("invalid email");
    }

    if(checkNumber(authorData.phone)){
        error_msg.push("invalid number");
    }

    if(checkGender(authorData.gender)){
        error_msg.push("invlaid gender");
    }

    if(CheckNull(authorData.country)){
        error_msg.push("invalid country");
    }

    if(CheckNull(authorData.age)){
        error_msg.push("invalid age");
    }

    var responseObj={};

    try{
        
        const authors = await authorModels.create(authorData);
        responseObj={
            data:authorData,
            message:"successful"
        }
    }catch(error){
        responseObj={
            data:[],
            message:"error"
        }
        console.log(responseObj);
    }

    res.json(responseObj);
    
}

/*
@route /author
@description "GET AUTHOR BY ID" 
@params - ROUTE PARAMS
@method: GET
@return_type JSON object
@content type text/JSON
 */
const author_id=async(req,res)=>{
    const{
        author_id
    }=req.params;
    let author=await authorModels.find({
        "id":author_id
    }, '-_id -__v');
    console.log(author);
    console.log(author[0].id);
}

/*
@route /author
@description "GET BOOKS BY AUTHOR ID" 
@params - ROUTE PARAMS
@method: GET
@return_type JSON object
@content type text/JSON
 */
const getBooksbyAuthorID = async(req,res) =>{
    const {
        author_id
    } = req.params;

    try{
        const pub_books = await authorModels.find({
            "id": author_id
        },{"books":1,"_id":0});
        console.log(pub_books);
        var pbook = pub_books[0].books;
        console.log(pbook);
        const bk=await book_Models.find({
            "name":{
                $in:pbook
            }
        });
        res.json({
            data:bk,
            message: "Successful"
        });
        console.log(bk);
        console.log(bk[0]);
    }
    catch(error){
        res.json({
            data: [],
            message: "Error"
        });
    }
}
/*
@route /author
@description "GET AUTHORS BY BOOK ISBN" 
@params - ROUTE PARAMS
@method: GET
@return_type JSON object
@content type text/JSON
 */

const getauthorByBookisbn=async(req,res)=>{
    const{
        book_isbn
    }=req.params;
    const getBook=await book_Models.find({
        "ISBN":book_isbn
    });
    const bks=getBook[0].author;
    const bk=await authorModels.find({
        "id":{
            $in:bks
        }
    })
    console.log(bk);
}

/*
@route /author
@description "UPDATING AUTHORS" 
@params - ROUTE PARAMS
@method: UPDATE
@return_type JSON object
@content type text/JSON
 */

const updateauthor=async(req,res)=>{
    const{
        "author_id":author_id,
        "change_author":change_author
    }=req.body;
    const updates=await authorModels.updateMany({
        "id":author_id
    },{
        "age":change_author
    });
    try{
        res.json({
            data:updates,
            message:"successful"
        })
    }catch(error){
        res.json({
            data:[],
            message:"error"
        })
    }
}
/*
@route /author
@description "DELETE AUHTORS BY AUTHOR_NAME" 
@params - ROUTE PARAMS
@method: DELETE
@return_type JSON object
@content type text/JSON
 */
const deleteauthor=async(req,res)=>{
    const{
        author_name
    }=req.params;
    console.log(author_name);
    try{
        const del_author=await authorModels.deleteOne({
            "name":author_name
        })
        res.json({
            data:del_author,
            message:"successful"
        })
    }catch(error){
        res.json({
            data:[],
            message:"error"
        })
    }
}



module.exports={
    author,
    author_id,
    getBooksbyAuthorID,
    getauthorByBookisbn,
    updateauthor,
    deleteauthor
}