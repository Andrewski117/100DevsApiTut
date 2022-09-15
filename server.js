const express = require('express');
const app = express();

const PORT = 8000;

const rappers = {
    '21 savage': {
        'birthName' : 'bill',
        'birthLocation' : 'down town',
        'age': 29
    },
    'eminem':{
        'birthName' : 'em',
        'birthLocation' : 'e town',
        'age': 44
    },
    'unknown':{
        'birthName' : '??????',
        'birthLocation' : 'unknown',
        'age': 0
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapName', (req, res) => {
    const rapperName = req.params.rapName.toLowerCase();
    if(rappers[rapperName]){
        res.json(rappers[rapperName]);
    }
    else{
        res.json(rappers['unknown']);
    }
    
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})