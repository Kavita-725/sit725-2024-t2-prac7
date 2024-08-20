// controllers/catController.js
const catModel = require('../models/catModel.js');

const getAllCats = async (req, res) => {
    try {
        const cats = await catModel.getAllCats();
        res.json({ statusCode: 200, data: cats, message: 'Get all cats successful' });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
};

const postCat = async (req, res) => {
    const cat = req.body;
    try {
        const result = await catModel.postCat(cat);
        res.json({ statusCode: 201, data: result, message: 'Cat added successfully' });
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
};

module.exports = { getAllCats, postCat };
