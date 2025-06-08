import books from "../../public/api/books.json";
import authors from "../../public/api/authors.json";
import bookStatus from "../../public/api/bookStatus.json";
import colors from "../../public/api/colors.json";
import genres from "../../public/api/genres.json";



export const SaveFilesToLocalStorage = () =>{
localStorage.setItem("book", JSON.stringify(books))
console.log(JSON.parse(localStorage.getItem("book" )|| 'null'))

localStorage.setItem("author", JSON.stringify(authors))
console.log(JSON.parse(localStorage.getItem("author")|| 'null'))

localStorage.setItem("bookStatus", JSON.stringify(bookStatus))
console.log(JSON.parse(localStorage.getItem("bookStatus") || 'null' ))

localStorage.setItem("colors", JSON.stringify(colors))
console.log(JSON.parse(localStorage.getItem("colors")|| 'null'))

localStorage.setItem("genres", JSON.stringify(genres))
console.log(JSON.parse(localStorage.getItem("genres")|| 'null'))
}

 


