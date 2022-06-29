const library = [];

class BookList {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // display
  display() {
    const booksHolderList = document.getElementById('book_list');
    booksHolderList.innerHTML = '';
    for (let i = 0; i < library.length; i += 1) {
      const item = document.createElement('li');
      item.classList = 'book-item';
      item.innerHTML = `
        <div class="book-holder">
          <div class="book-info-holder">
            <h2 id="book-title" class="book-title">"${library[i].title}" &nbsp</h2>
            <p id="book_author" class="book-author"> by ${library[i].author}</p>
          </div>
          <div class="btn-holder">
            <button class="remove-btn" data-set="${i}">
            <i class="fa fa-trash"></i>&nbsp; Remove</button>
          </div>
        </div>`;
      booksHolderList.appendChild(item);
    }
    localStorage.setItem('Book Library', JSON.stringify(library));

    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        library.splice(element.dataset.id, 1);
        localStorage.setItem('Book Library', JSON.stringify(library));
        this.display();
      });
    });
  }

  // add new book
  addBook(bookTitle, bookAuthor) {
    const newBook = new BookList(bookTitle, bookAuthor);
    this.title = bookTitle;
    this.author = bookAuthor;
    library.push(newBook);
  }
}

const localStorageBookList = JSON.parse(localStorage.getItem('Book Library'));
const list = new BookList();
if (localStorageBookList != null) {
  localStorageBookList.forEach((element) => {
    library.push(element);
  });
  list.display();
}

const add = document.getElementById('add_btn');
add.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  list.addBook(title, author);
  list.display();
});
