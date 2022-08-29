const express = require('express');
const path = require('path');

//Constants:
const app = express();
const port = 7777;
const hostname = '127.0.0.1';

app.use('/static', express.static('static'));
app.use(express.urlencoded());
//PUG:
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
})
app.post('/', (req, res)=>{
    term_found = req.body.term
    if (term_found.includes('/')) {
        res.status(200).redirect(`https:/${term_found}`);
    }else{
        var concatinate = `https://www.google.com/search?client=firefox-b-d&q=${term_found}`;
        res.status(200).redirect(concatinate)
    }
})
app.listen(port, ()=>{
    console.log(`Server started at: http://${hostname}:${port}/`);
})