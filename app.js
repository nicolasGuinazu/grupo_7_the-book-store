const express = require('express');
const app = express();
const path=require('path');
const methodOverride = require('method-override');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const userLoggedMiddleware=require('./middlewares/userLoggedMiddleware')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

/****************** COOKIE PARSER *************************/
app.use(cookieParser())
/****************** METHOD OVERRIDE *************************/
app.use(methodOverride('_method'));

/****************** TEMPLATES ENGINE ********************/
app.set('view engine', 'ejs');





/****************** VISTAS SIN RUTAS Y CONTROLLER *******/
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/carrito-compra', (req, res) => {
  res.render('carrito-compras')
})  


/****************** RUTAS *************************/
const productsRouter = require('./routes/products'); // Rutas /products
app.use('/products', productsRouter);

const usersRouter = require('./routes/users'); // Rutas /users
const router = require('./routes/products');
app.use('/users', usersRouter);



app.use(userLoggedMiddleware)

/************* INICIANDO EL SERVIDOR **************/
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})