const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8080;
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));
//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
//Midledware
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'josé torres'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'josé torres'
    });
});
app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`);
});