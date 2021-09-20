const db=require('../Database/db');
const mongoose=require('mongoose');
const publicationModel=require('../Models/publications.Model');
const helpers_publish=require('../helpers/publications');
const publications_insert=async(req,res)=>{
    const{
        publishData
    }=req.body;
    err_mss=[];
    if(helpers_publish.CheckNull(publishData.id)){
        err_mss.push('id is not Valid');
    }
    if(helpers_publish.CheckNull(publishData.name)){
        err_mss.push('name is nt valid');
    }
    if(helpers_publish.checkEmail(publishData.email_id)){
        err_mss.push('email is not Valid');
    }
    if(helpers_publish.checkNumber(publishData.contact_number)){
        err_mss.push('contact number is not valid');
    }
    if(helpers_publish.CheckArray(publishData.books_pub)){
        err_mss.push('books publcations is not Valid');
    }
    if(helpers_publish.CheckArray(publishData.authors_assc)){
        err_mss.push('authors asso is not Valid');
    }

    responseObj={};
    try{
        responseObj={
            data:publishData,
            message:"successful",
            message:"inside the Publications"
        }
    }catch(error){
        responseObj={
            data:[],
            message:"error",
            message:"inside the Publications"
        }
    }
    console.log(responseObj);
    const publications=await publicationModel.create(publishData);
}

module.exports={
    publications_insert
}