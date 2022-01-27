import express, { urlencoded, json } from 'express';
app = express()
port = process.env.PORT || 5000
mongoose = require('mongoose')
const uri = 'mongodb://localhost/Bookdb';
Book = require('./api/models/bookModel') //created model loading here
// mongoose instance connection url connection
mongoose.connect(uri, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
 }).then(res=>{
  console.log("Database Connected!")
 }).catch(err => {
  console.log(Error, err.message);
})
app.use(urlencoded({ extended: true }))
app.use(json());
import routes from './api/routes/bookRoutes'; //importing route
routes(app); //register the route
app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port);
console.log('RESTful API server started on: ' + port);