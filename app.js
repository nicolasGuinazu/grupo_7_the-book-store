const express = require('express');
const app = express();
const path=require('path');
var cors = require('cors')
require('dotenv').config()
const methodOverride = require('method-override');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const userLoggedMiddleware=require('./middlewares/userLoggedMiddleware')
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()) //cross origin resource sharing (permite conusmir api del mismo origen)
/****************** COOKIE PARSER *************************/
app.use(cookieParser())
/****************** PUBLIC PATH *************************/
app.use(express.static(path.join(__dirname, 'public')));

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

/****************** SESSION *************************/
app.use(session({
  secret: 'shhh secret!', 
  resave: false,
  saveUninitialized: false
}));
app.use(userLoggedMiddleware)

/****************** METHOD OVERRIDE *************************/
app.use(methodOverride('_method'));

/****************** TEMPLATES ENGINE ********************/
app.set('view engine', 'ejs');


/****************** RUTAS *************************/
const productsApiRouter=require('./routes/api/products')
app.use('/api/products', productsApiRouter);

const usersApiRouter=require('./routes/api/users')
app.use('/api/users', usersApiRouter);


const productsRouter = require('./routes/products'); // Rutas /products
app.use('/products', productsRouter);

const usersRouter = require('./routes/users'); // Rutas /users
app.use('/users', usersRouter);

const indexRouter = require('./routes/index'); // Rutas /
app.use('/', indexRouter);

// Rutas Legales
const legalRouter = require('./routes/legal');
app.use('/legal', legalRouter);

app.use(function (req, res, next) {
  res.status(404).render('not-found')
})

/************* INICIANDO EL SERVIDOR **************/
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})