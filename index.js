const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());

//route
app.use('/api/products', productRoute);

// Database connection
mongoose
  .connect(
    'mongodb+srv://hemanthshetty346:Vn0WCLoY9kaxFuXv@crud.wrfrs.mongodb.net/simpleCRUD?retryWrites=true&w=majority&appName=CRUD'
  )
  .then(() => {
    console.log('Connected to the Database');

    // Start the server only after the DB connection is successful
    app.listen(3000, () => {
      console.log('Server is running at port 3000');
    });
  })
  .catch((err) => {
    console.log(`Error while connecting: ${err}`);
  });

// ****************************************************************************************
