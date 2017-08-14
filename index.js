const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Hi!!!!!!!!!!!');
});

app.listen(8080, () => console.log('Listening server port 8080'));
