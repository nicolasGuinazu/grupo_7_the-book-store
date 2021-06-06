const express = require('express');
const app = express();
const path=require('path')
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/descripcion-del-producto', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/descripcion-producto.html'))
})  

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/registerForm.html'))
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})