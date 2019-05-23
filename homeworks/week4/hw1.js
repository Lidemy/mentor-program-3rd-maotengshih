const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books',
  (error, response, body) => {
    const bookList = JSON.parse(body);
    for (let i = 0; i <= 9; i += 1) {
      console.log(`${bookList[i].id} ${bookList[i].name}`);
    }
  },
);
