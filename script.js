

let books =[];
const book_list = JSON.parse(localStorage.getItem('books'));
if (book_list != null){
book_list.forEach(element => {
    books.push(element);
});
display();
}
// Add book to book list
function addBook (){
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    books.push(  {
        title : bookTitle,
        author : bookAuthor
    }); 
    const booksHolderList = document.getElementById('book_list').innerHTML= '';
    display();
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
}

// remove book 

const add = document.getElementById('add_btn');
add.addEventListener('click', addBook);

function display () {
const booksHolderList = document.getElementById('book_list');
    for (let i = 0; i < books.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = `
                    <div>
                        <div>
                            <h2 id="book-title">${books[i].title}</h2>
                            <p id="book_author">${books[i].author}</p>
                        </div>
                        <div>
                            <button class="remove-btn" data-set="0">Remove</button>
                        </div>
                    </div>`;
        booksHolderList.appendChild(item);
    }
}





// addBook('Apple', 'Berkay' );
// addBook('orange', 'Berkay' );
// addBook('Apple', 'alan' );
// addBook('orange', 'alan' );

