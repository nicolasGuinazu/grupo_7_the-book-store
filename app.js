const express = require('express');
const app = express();
const path=require('path')

app.use(express.static(path.join(__dirname, 'public')));

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/productDetail', (req, res) => {
  res.render('productDetail')
})  

app.get('/carrito-compra', (req, res) => {
  res.render('carrito-compras')
})  

app.get('/register', (req, res) => {
  res.render('registerForm')
})

app.get('/login', (req, res) => {
  res.render('login')
})

/****************** RUTAS *************************/
const productsRouter = require('./routes/products'); // Rutas /products
app.use('/products', productsRouter);


/*app.get('/products/create',(req, res) => {
  res.render('createProduct')
})

app.get('/products/modify',(req, res) => {
  res.render('modifyProduct')
})*/

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})