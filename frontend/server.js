const express = require("express");
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(9090, function(){
    console.log("Mon server écoute sur le port 9090")
})

app.get('/', function (req, res){
    var nomPage = {
        nom : 'Accueil'
    }
    
    res.render('pages/index', nomPage);
})
app.get('/about', function (req, res){
    nomPage = {
        nom : 'About'
    }
    res.render('pages/about-us', nomPage);
})
app.get('/contact-us', function (req, res){
    nomPage = {
        nom : 'Contact'
    }
    
    res.render('pages/contacts', nomPage);
})

app.get('/booking', function (req, res){
    nomPage = {
        nom : 'Réservation de la formation'
    }
    
    res.render('pages/booking', nomPage);
})

app.get('/formation', function (req, res){
    nomPage = {
        nom : 'Formations Disponibles'
    }
    
    res.render('pages/formation', nomPage);
})
app.get('/article', function (req, res){
    nomPage = {
        nom : 'Article'
    }
    
    res.render('pages/news-post', nomPage);
})