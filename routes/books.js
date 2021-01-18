const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const Author = require('../models/author')

// all book route
router.get('/', async (req, res) => {
  res.send('All books')
})

//New book Route
router.get('/new', async (req, res) => {
    try{
        const authors = Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book,
        })
    } catch {
        res.redirect('/books')
    }
})

// create book Route
router.post('/', async (req, res) => {
    res.send('Create book')
})

module.exports = router