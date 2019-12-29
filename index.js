const express = require('express');
const api = require('./routes');
// const posts = require('./routes/posts');
// const comments = require('./routes/comments');
const app = express();
const port = 8000;

// Get a list of comments
// app.use('/api/posts', posts);
// app.use('/api/comments', comments);
app.use('/api', api);
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
