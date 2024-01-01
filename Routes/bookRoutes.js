import express from 'express';
import {getAllBooks,getBook,createNewBook,deleteBook}from '../controllers/bookController.js'



const router=express.Router();


router.get('/',getAllBooks);
router.get('/:id',getBook);
router.post('/',createNewBook);
router.delete('/:id',deleteBook);
//router.patch('/:id',updateBook);



export default router;