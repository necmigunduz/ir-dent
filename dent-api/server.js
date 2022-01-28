const express = require('express')
const cors = require('cors');

app = express();
app.use(cors());
let port = process.env.PORT || 5000;
app.get('/', (req, res) => res.send('This is an API produced with NodeJS'));
mongoose = require('mongoose');
const uri = 'mongodb://localhost/Bookdb';
Book = require('./api/models/bookModel') //created model loading here
// mongoose instance connection url connection
mongoose.connect(uri, {
 useNewUrlParser: true,
 useUnifiedTopology: true
 }).then(res=>{
  console.log("DB Connected!")
 }).catch(err => {
  console.log(Error, err.message);
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const routes = require('./api/routes/bookRoutes'); //importing route
routes(app); //register the route
app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);

console.log('RESTful API server started on: ' + port);