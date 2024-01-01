import * as chai from 'chai';
import { readBooksFile, writeBooksFile } from '../model/booksModel.js';
import {getBook,createNewBook,deleteBook}from '../controllers/bookController.js'
import { describe } from 'mocha';
import supertest from 'supertest';
import app from '../server.js';


const assert = chai.assert;

  describe('integration tests for books endpoint', () => {

    it('testing GET /books endpoint',  () => {
        const results = readBooksFile()
        assert.isArray(results);

        
    });

    it('testing delete /books endpoint', async () => {
       
        const results = readBooksFile()

        assert.notDeepInclude(results, {"id":"8","title":"The Alchemist","author":{"name":"Paulo Coelho",
        "birthDate":"August 24, 1947","nationality":"Brazilian"},"genre":"Philosophical Fiction",
        "pages":197,"publishedIn":1988,"reviews":[{"user":"DreamChaser","rating":5,
        "comment":"A life-changing journey of self-discovery."},
        {"user":"CoelhoFan","rating":4,"comment":"Beautifully written, full of wisdom."}],"description":"The Alchemist is a philosophical novel by Paulo Coelho...","coverImage":"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NpZx6bmtL._SL1500_.jpg",
        "price":14.49,"averageRating":4.5,"readingProgress":40});
        assert.isArray(results);
        assert.lengthOf(results,7);
        
    });


    const request = supertest(app);

   
      // Use it.only if you want only this test case to run
      it('get one book by ID', async () => {
        const bookId = 3;
        const response = await request.get(`/books/${bookId}`);
    
        assert.isObject(response.body);
        assert.equal(response.body.id, bookId);
      });
    
      // Add more tests as needed

      it.only('create new book',async()=>{

        const initialBooks = await supertest(app).get('/books');

        const newBook={

        "id":"9",
        "title":"soso",
        "author":{"name":"F. Scott Fitzgerald",
        "birthDate":"September 24, 1896",
        "nationality":"American"},"genre":"Fiction","pages":180,
        "publishedIn":1925,
        "reviews":[{"user":"BookLover123","rating":4,"comment":"A classic!"},
        {"user":"LiteraryGuru","rating":5,"comment":"Absolutely brilliant."}],
        "description":"The Great Gatsby is a novel by F. Scott Fitzgerald...",
        "coverImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
        "price":15.99,
        "averageRating":4.5,
        "readingProgress":20}

      
        const response = await supertest(app)
        .post('/books')
        .set('Content-Type', 'application/json')
        .send(newBook);
        
        const updatedBooks = await supertest(app).get('/books');
        
            console.log(updatedBooks.body.length);
            console.log(initialBooks.body.length)
        
            assert.lengthOf(updatedBooks.body, initialBooks.body.length + 1);

});

})

