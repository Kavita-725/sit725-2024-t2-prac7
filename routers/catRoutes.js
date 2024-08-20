// routes/catRoutes.js
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController.js');

router.get('/api/cats', catController.getAllCats);
router.post('/api/cat', catController.postCat);

module.exports = router;
