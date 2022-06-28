const library = [];
const bookList = JSON.parse(localStorage.getItem('books'));
// display
function display() {
  const booksHolderList = document.getElementById('book_list');
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

  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((element) => {
    element.addEventListener('click', () => {
      library.splice(element.dataset.id, 1);
      const booksHolderList = document.getElementById('book_list');
      booksHolderList.innerHTML = '';
      display();
      localStorage.setItem('books', JSON.stringify(library));
    });
  });
}

if (bookList != null) {
  bookList.forEach((element) => {
    library.push(element);
  });
  display();
}

// Add book to book list
function addBook() {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  library.push({
    title: bookTitle,
    author: bookAuthor,
  });
  const booksHolderList = document.getElementById('book_list');
  booksHolderList.innerHTML = '';
  display();
  localStorage.setItem('books', JSON.stringify(library));
}

const add = document.getElementById('add_btn');
add.addEventListener('click', addBook);
