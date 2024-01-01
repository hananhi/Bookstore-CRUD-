import fs from'fs'
import { readBooksFile ,writeBooksFile} from '../model/booksModel.js';
import { Console } from 'console';

export const getAllBooks = (req, res, next) => {
  const books=readBooksFile();
  res.send(books);
};

export const getBook=(req,res,next)=>{

  let books=readBooksFile();
    let BookId=req.params.id;

    let foundUser=books.find(book=>book.id===BookId);

    res.send(foundUser)

}

export const createNewBook=(req,res,next)=>{

    let books=readBooksFile()
    let newBook=req.body ;
    
    if(books.find(e=>e.id===newBook.id ||e.title===newBook.title)){
      res.status(400).send('book already exists');
return;
    }

    books.push(newBook);

    writeBooksFile(books)
    res.send(books);

}

export const deleteBook=(req,res , next)=>{

  const deletebookID= req.params.id ;
  const books= readBooksFile();
 const updatedBooks= books.filter(m =>m.id != deletebookID);
 writeBooksFile(updatedBooks);

  res.send('success using delete ')
}

/*
export const updateBook=(req,res,next)=>{

  let updatedBookID= req.params.id ;
  const updatedBook=req.body;
  const books=  readBooksFile();


  let updatedArray=books.map(book=>{
    if( book.id===updatedBookID){
      return{...book,...updatedBook}
    }
    else{
    return book ;
    }
  })

  console.log(updatedArray);
 writeBooksFile(updatedArray);
  res.send('success')
}
*/