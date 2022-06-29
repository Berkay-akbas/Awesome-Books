setInterval(() => {
  const date = new Date();
  const todayYear = date.getFullYear();
  const todayMonth = date.toLocaleString('default', { month: 'long' });
  const todayDay = date.getDate();
  let todayHour = date.getHours();
  let todayTimeShift = 'am';
  if (todayHour > 12) {
    todayHour -= 12;
    todayTimeShift = 'pm';
  } else {
    todayTimeShift = 'am';
  }
  const todayMinute = date.getMinutes();
  const todaySeconds = date.getSeconds();
  document.getElementById('date').innerHTML = `${todayDay} ${todayMonth} ${todayYear}, ${todayHour}:${todayMinute}:${todaySeconds} ${todayTimeShift}`;
}, 1000);

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
  const regX = /^[^-\s][a-zA-Z0-9_\s-]+$/;
  let isTitleValid = false;
  let isAuthorValid = false;
  if (regX.test(title)) {
    document.getElementById('titleError').innerHTML = '';
    isTitleValid = true;
  } else {
    document.getElementById('titleError').innerHTML = '* Please fill out Title';
  }

  if (regX.test(author)) {
    document.getElementById('authorError').innerHTML = '';
    isAuthorValid = true;
  } else {
    document.getElementById('authorError').innerHTML = '* Please fill out Title';
  }
  if (isTitleValid && isAuthorValid) {
    list.addBook(title, author);
  }
  list.display();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
// Single Page Application
const pageTitle = document.querySelector('#pageTitle');
const listBtn = document.querySelector('#list');
const addNewBtn = document.querySelector('#addNew');
const contactUs = document.querySelector('#contact');
const listView = document.querySelector('#listView');
const newBookAdd = document.querySelector('#newBookAdd');
const contactInfo = document.querySelector('#contactInfo');
// listBtn event listener
listBtn.addEventListener('click', () => {
  pageTitle.innerHTML = 'All awesome books';
  if (listBtn.classList.contains('active') === false) {
    listBtn.classList.add('active');
    listView.classList.add('displayOn');
  }
  if (addNewBtn.classList.contains('active') === true) {
    addNewBtn.classList.remove('active');
    newBookAdd.classList.remove('displayOn');
  }
  if (contactUs.classList.contains('active') === true) {
    contactUs.classList.remove('active');
    contactInfo.classList.remove('displayOn');
  }
});
// addNewBtn event listener
addNewBtn.addEventListener('click', () => {
  pageTitle.innerHTML = 'Add new book';
  if (listBtn.classList.contains('active') === true) {
    listBtn.classList.remove('active');
    listView.classList.remove('displayOn');
  }
  if (addNewBtn.classList.contains('active') === false) {
    addNewBtn.classList.add('active');
    newBookAdd.classList.add('displayOn');
  }
  if (contactUs.classList.contains('active') === true) {
    contactUs.classList.remove('active');
    contactInfo.classList.remove('displayOn');
  }
});
// ContactUs event listener
contactUs.addEventListener('click', () => {
  pageTitle.innerHTML = 'Contact Information';
  if (listBtn.classList.contains('active') === true) {
    listBtn.classList.remove('active');
    listView.classList.remove('displayOn');
  }
  if (addNewBtn.classList.contains('active') === true) {
    addNewBtn.classList.remove('active');
    newBookAdd.classList.remove('displayOn');
  }
  if (contactUs.classList.contains('active') === false) {
    contactUs.classList.add('active');
    contactInfo.classList.add('displayOn');
  }
});
