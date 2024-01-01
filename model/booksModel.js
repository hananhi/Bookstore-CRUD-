import fs from'fs' ;


export const readBooksFile=()=>{

    try {
        const jsonFile=fs.readFileSync('./Data/bookData.json').toString();

        return JSON.parse(jsonFile);
        
    } catch (error) {
        console.error('Error reading book data file:', error);
        return null;
    }
}


export const writeBooksFile = async (books) => {
    try {
      // Write to the local file
      fs.writeFileSync('./Data/bookData.json', JSON.stringify(books));
  
      // Write to the external API
      const apiUrl = 'https://6578511ef08799dc8044e5b2.mockapi.io/EBookStore';
      await fetch(apiUrl, {
        method: 'PUT', // or 'POST' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(books),
      });
  
    } catch (error) {
      console.error('Error writing book data:', error);
      return null;
    }
  };