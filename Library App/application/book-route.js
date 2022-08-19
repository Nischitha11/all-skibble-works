const express = require("express");
const Book = require("../models/book-model");
const router = express.Router();

router.get('/',async (req,res) => {
    const response = await Book.find({});

      res.render("home", {data: response});
});
router.post("/", async (req, res)=> {
  try{
    console.log(req.body);
    const newBook = new Book({ ...req.body });
    const response = await newBook.save();
    res.redirect('/books');
  }
  catch(error) {
    console.log('error');
  }
  
});

router.get('/add-book', (req,res) => {
    res.render("add-book");
});

module.exports = router;