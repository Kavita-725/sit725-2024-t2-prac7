// app.js
const express = require('express');
const path = require('path');
const app = express();
const catRoutes = require('./routers/catRoutes.js');
const catModel = require('./models/catModel.js')

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use(catRoutes);

app.get('/', async (req, res) => {
    try {
        const cats = await catModel.getAllCats();
        res.render('index', { cats });
    } catch (error) {
        res.status(500).send('Error loading page');
    }
});

app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
});
