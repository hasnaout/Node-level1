const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));

const ClientModel = require('./models/Client');
app.post('/', (req, res) => {
    console.log(req.body)
    const newClient = new ClientModel({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        telephone: req.body.telephone,
        adresse: req.body.adresse,
        password: req.body.password
    });
    newClient.save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            res.status(500).send('Probleme d\'enregistrement : ' + err);
        });

})


app.get('/', (req, res) => {
    res.sendFile("./views/home.html", { root: __dirname })
})

mongoose.connect('mongodb+srv://dbdevSinga_12:ivkLwOgG3wm4ieQv@cluster0.slufcpo.mongodb.net/all-data?appName=Cluster0')
    .then(() => { 
        app.listen(port, () => {
            console.log(`http://localhost:${port}/`)
        })
    })
    .catch((err) => {
        console.log(err);
    });