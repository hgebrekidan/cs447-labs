const express = require('express');
const bookController = require('../controllers/bookController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:prodId', bookController.getBookById);

router.post('/', authController.authorizeAdmin, bookController.save);

router.put('/:prodId', authController.authorizeAdmin, bookController.update);

router.delete('/:prodId', authController.authorizeAdmin, bookController.deleteById);

module.exports = router;