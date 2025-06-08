export const getBooks = () =>
  JSON.parse(localStorage.getItem("book"));

export const getAuthors = () =>
  JSON.parse(localStorage.getItem("author"));

export const getBookStatus = () =>
  JSON.parse(localStorage.getItem("bookStatus"));

export const getColors = () =>
  JSON.parse(localStorage.getItem("colors"));

export const getGenres = () =>
  JSON.parse(localStorage.getItem("genres"));


export const deleteBook = (id) => {
  const books = getBooks();
  const filteredBooks = books.filter((book)  => book.id !== id)
  localStorage.setItem("book", JSON.stringify(filteredBooks))
  return(books.length !== filteredBooks.length)
};

export const addBook = (newbook) =>{
  const books = getBooks();
  const updateBooks = [...books, newbook]
  localStorage.setItem("book", JSON.stringify(updateBooks))
};








