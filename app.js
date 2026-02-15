const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const ClientModel = require('./models/Client');
app.set('view engine', 'ejs');
app.use(express.static('public'));
var moment = require('moment');
moment().fromNow();//pour update , voir vedio 12
const path=require('path');
const livereload=require('livereload');
const liveReloadServer=livereload.createServer();
liveReloadServer.watch(path.join(__dirname,'public'));
const connectLivereload=require('connect-livereload');
app.use(connectLivereload());
liveReloadServer.server.once("connection",()=>{
    setTimeout(()=>{
        liveReloadServer.refresh("/");
    },100); 
});
var methodOverride=require('method-override');
app.use(methodOverride('_method'));
const router = express.Router();

const clientRoutes = require('./routes/clientRoutes');
app.use(express.json());
app.use('/api/clients', clientRoutes);
module.exports = router;





mongoose.connect('mongodb+srv://dbdevSinga_12:ivkLwOgG3wm4ieQv@cluster0.slufcpo.mongodb.net/all-data?appName=Cluster0')
    .then(() => { 
        app.listen(port, () => {
            console.log(`http://localhost:${port}/`)
        })
    })
    .catch((err) => {
        console.log(err);
    });
    