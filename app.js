const express = require('express');
const app = express();
const path=require('path')

app.use(express.static(path.join(__dirname, 'public')));

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/descripcion-del-producto', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/detalle-producto.html'))
})  

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/registerForm.html'))
})

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000')
})