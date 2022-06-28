

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
}

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
                            <button class="remove-btn" data-set="${i}">Remove</button>
                        </div>
                    </div>`;
        booksHolderList.appendChild(item);
    }
    removeBook();
}

function removeBook(){

    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach(element => {
    element.addEventListener('click', () => {
        books.splice(element.dataset.id ,1);
        const booksHolderList = document.getElementById('book_list').innerHTML= '';
        display();
        localStorage.setItem('books', JSON.stringify(books));
    });
    });
}




// addBook('Apple', 'Berkay' );
// addBook('orange', 'Berkay' );
// addBook('Apple', 'alan' );
// addBook('orange', 'alan' );

