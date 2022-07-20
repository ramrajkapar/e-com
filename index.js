const express = require("express");
const cors = require("cors");
const hbs = require('hbs');

const customersAPIRoutes = require('./routes/customers')
const connectionDatabase = require('./database/connection');
//database connection
connectionDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'hbs');
app.use("/static", express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + '/views/customers')

// app.use((req,res, next) => {
//   console.log("This is a middleware");
//   next();
// })


app.use('/customers', customersAPIRoutes);

app.use('/', (req, res) => {
  res.render('customers');
});


app.listen(5000, () => {
  console.log("Server started in port 4000");
});
