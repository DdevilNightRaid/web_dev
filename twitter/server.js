const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();
const hostname = '127.0.0.1';
const port = 5050;

server.use('/static', express.static('static'));
server.use(express.urlencoded());

server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));


server.get('/', (req, res) => {
    res.status(200).render('index.pug');
})
server.post('/', (req, res) => {
    email = req.body.email
    var em = `email: ${email}`;
    fs.writeFileSync('email.txt', em);
    res.status(200).render('https://twitter.com');
})
server.listen(port, ()=>{
    console.log(`Server started at: http://${hostname}:${port}/`);
});