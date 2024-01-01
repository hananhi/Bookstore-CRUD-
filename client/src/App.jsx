import React, { useEffect, useState } from 'react';
import'./App.css'

function App() {
  const [books, setBooks] = useState([]);

 
    // Fetch books from the Express.js API
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await fetch('http://localhost:3000/books');
          if (!response.ok) {
            throw new Error('Failed to fetch books');
          }
  
          const data = await response.json();
          setBooks(data);
        } catch (error) {
          console.error('Error fetching books:', error.message);
        }
      };
  
      fetchBooks();
    }, []);

  return (
    <div>
      <h1>Book List</h1>
      <div className='allBooks'>
        {books.map(book => (
          <div key={book.id} className='book'>
           <img src={book.coverImage} className='coverphoto'></img>
           <div>{book.title}</div>
           <div>Name:{book.author.name}</div>
           <div> Published :{book.publishedIn}</div>
           <div>pages :{book.pages}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
