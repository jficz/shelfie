//bookDetail => covers
//konec URL značí velikost s/m/l

const fetchCover = async () => {
  const response = await fetch(
    `https://covers.openlibrary.org/b/olid/${tadybuderesponzivníOL}-s.jpg`,
  );
  const img = await response.img();
  const imageUrl = URL.createObjectURL(img);
  document.getElementById('cover').src = imageUrl;
};
fetchCover();
