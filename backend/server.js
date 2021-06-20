const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();
const app = express()
const URL = process.env.ATLAS

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("Base de donnée est connectée avec succés...")).catch((err) => console.log(`an error &{err}`))
// body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// produit Routes
const stockRouter = require('./routes/api/StockRoute')
app.use('/api/stocks/', stockRouter)

//contact Routes
const contactRouter = require('./routes/api/ContactRoute')
app.use('/api/contact/', contactRouter)


const port = process.env.PORT || 5000;

app.listen(port, () => console.info(`Serveur tourne sur le port:${port}.`));
