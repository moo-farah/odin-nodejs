const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1><p>This is a paragraph</p>');
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first app Express App - listening on port ${PORT}`);
});