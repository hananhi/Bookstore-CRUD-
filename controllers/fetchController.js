import fs from 'fs'

 export async function fetchData(){

    const response=await fetch('https://6578511ef08799dc8044e5b2.mockapi.io/EBookStore');
    const data= await response.json();

    fs.writeFileSync('./Data/bookData.json' , JSON.stringify(data));


}

