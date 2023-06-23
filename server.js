const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors')

app.use(cors());
app.use(express.static('images'));

app.get('/products', (req, res) => {
    fs.readFile(path.join(__dirname, 'backend', 'products.json'), 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading product data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            const products = JSON.parse(data).products;
            res.json(products);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
