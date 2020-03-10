

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send();
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});


console.log("This is the back !! Let's have fun with express.js");
