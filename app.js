const express = require('express');
const app = express();
const path=require('path')

/****************** PUBLIC PATH *************************/
app.use(express.static(path.join(__dirname, 'public')));

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

/****************** TEMPLATES ENGINE ********************/
app.set('view engine', 'ejs');


/****************** VISTAS SIN RUTAS Y CONTROLLER *******/
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/productDetail', (req, res) => {
  res.render('productDetail')
})  

app.get('/carrito-compra', (req, res) => {
  res.render('carrito-compras')
})  


/****************** RUTAS *************************/
const productsRouter = require('./routes/products'); // Rutas /products
app.use('/products', productsRouter);

const usersRouter = require('./routes/users'); // Rutas /users
app.use('/users', usersRouter);


/************* INICIANDO EL SERVIDOR **************/
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})