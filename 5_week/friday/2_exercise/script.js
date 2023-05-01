var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400.jpg",
  },
];

// Easy one

//   books.forEach(item => {
//     const p = document.createElement("p");
//     const n = document.createTextNode(`Name: ${item.title}, Author: ${item.author}`);
//     p.appendChild(n);

//     const d = document.querySelector("body");
//     d.appendChild(p);
//   })

// harder one with two lists

// function showBookLists(){
//     const body = document.querySelector("body");

//     books.forEach(item => {
//         const ul = document.createElement("ul");
//         body.appendChild(ul);
//         for(const key in item){
//             const li = document.createElement("li");
//             if(key === 'img'){
//                 const img = document.createElement("img");
//                 if (item.alreadyRead === true){
//                     img.classList.add('read');
//                 }
//                 img.src = item[key];
//                 li.appendChild(img);
//             }
//             else if(key === 'alreadyRead'){
//                 continue;
//             }
//             else{
//                 const content = document.createTextNode(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${item[key]}`);
//                 li.appendChild(content);
//             }
//             ul.appendChild(li);
//         }
//         const hr = document.createElement('hr');
//         body.appendChild(hr);
//     });
// }
// showBookLists();

// harder one with one list

function showBookList() {
  const body = document.querySelector("body");
  const ul = document.createElement("ul");
  body.appendChild(ul);
  books.forEach((book) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    // document.querySelector("ul").insertAdjacentElement("afterbegin", li);
    ul.appendChild(li);
    li.append(h3, p, img);
    p.innerText = book.author;
    h3.innerText = book.title;
    img.src = book.img;
    book.alreadyRead? img.classList.add('read') : img.classList.add('nonRead');
  });
}
showBookList();
