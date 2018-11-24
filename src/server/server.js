const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const ingredients = require('./controllers/ingredients.controller');
const burgersMenu = require('./controllers/burgersMenu.controller');

app.use('/ingredients', ingredients);
app.use('/burgersmenu', burgersMenu);

app.listen(port, () => console.log(`Listening on port ${port}`));