const express = require('express');
const app = express();

const PORT = 8000;

const savage = {
    'birthName' : 'bill',
    'birthLocation' : 'down town',
    'age': 29
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(savage);
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})