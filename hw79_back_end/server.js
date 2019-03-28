const express = require('express');
const products = require('./app/products');
const categories = require('./app/categories');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mysql      = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const port = 8001;

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : '1qaz@WSX29',
  database : 'shop2'
});

app.use('/products', products(connection));
app.use('/categories', categories(connection));

connection.connect((err)=>{
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);

  app.listen(port, () => {
    console.log(`Server started on ${port} port`);
  });

});


