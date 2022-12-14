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
    // db.collection('rappers').find().sort({likes:-1}).toArray()
    // .then(data => {    //data will be the array of objects we got back from the db
    //     res.rend('index.ejs', {info:data});
    // })
    //     .catch(err => console.error(err))
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

// app.post('/addRapper', (req, res) => {  // the /addRapper route is coming from the forms action attribute in our ejs
//     db.collection('rappers').insertOne({stageName: req.body.stageName, birthName: req.body.birthName, likes: 0})
//         .then(res => {
//             console.log('Rapper Added');
//             res.redirect('/');
//         })
//         .catch(err => console.error(err));
// })

// app.delete('/deleteRapper',(req,res) => {
//     db.collection('rappers').deleteOne({stageName: req.body.stageNames}) //find object with the name of whatever, and remove this document/obj
//         .then(res => {
//             console.log('Rapper Deleted');
//             res.json('Rapper deleted');
//         })
//         .catch(err => console.error(err));
// })

// app.put('/addOneLike', (req,res) => {
//     db.collection('rappers').updateOne({stageName : req.body.stageNameS, birthName: req.body.birthNameS, likes: req.body.likeS}, //this will find an object in the data base that matches all those criteria
//         {
//             $set: {
//                 likes: req.body.likeS + 1
//             }
//         },{
//         sort: {_id: -1}, //this is if our array had multiple same values, it'd grab the first one
//             upsert: false //this is if it doesn't exist, it creates it. both sort and upsert are not necessary to add
//         })
//         .then(res => {
//             console.log('Added one like');
//             res.json('Like Added');
//         })
//         .catch(err => console.error(err));
// })


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})