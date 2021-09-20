const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const author_controllers=require('../controllers/author.controllers');

console.log("inside auhtorrouter");
router.post('/',author_controllers.author);
router.get('/:author_id',author_controllers.author_id);
router.get('/:author_id/books',author_controllers.getBooksbyAuthorID);
router.get('/:book_isbn/book_author',author_controllers.getauthorByBookisbn);
router.put('/upadte/updateAuthor',author_controllers.updateauthor)
router.delete('/delete/:author_name/name',author_controllers.deleteauthor);
module.exports=router;
