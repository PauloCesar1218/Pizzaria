const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs'); 
app.use('/public', express.static('public'));

app.listen(5000, () => console.log('Server listening on port 5000'));

app.get('/', (req, res) => {
    res.render('index');
})

