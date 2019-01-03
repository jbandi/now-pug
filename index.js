const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
  res.render('test', { message: 'Have a nice day!' })
});

app.get('/api', (req, res) => {
  res.status(200).send("API endpoint is working!");
});

const listener = app.listen(4002, () => console.log('Example app started!'));
