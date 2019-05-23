const request = require('request');

// read
if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const bookList = JSON.parse(body);
      console.log(`${bookList.id} ${bookList.name}`);
    },
  );
} else if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books',
    (error, response, body) => {
      const bookList = JSON.parse(body);
      for (let i = 0; i < bookList.length; i += 1) {
        console.log(`${bookList[i].id} ${bookList[i].name}`);
      }
    },
  );
} else if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    () => {
      console.log('Delete Success');
    },
  );
} else if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    (error, response, body) => {
      const bookList = JSON.parse(body);
      console.log(`${bookList.id} ${bookList.name}`);
    },
  );
} else if (process.argv[2] === 'update') {
  request.put(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        id: process.argv[3],
        name: process.argv[4],
      },
    },
  );
}
