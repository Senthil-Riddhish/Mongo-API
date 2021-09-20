const express=require('express');
const router=express.Router();
const publish_controllers=require('../controllers/publications.controllers');
console.log('inside the publications');

router.post('/',publish_controllers.publications_insert);

module.exports=router;
