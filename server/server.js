require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('get usuario');
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        })
    }else{
        res.json({
            body
        });
    }
});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuraio', (req, res) => {
    res.json('get delete');
});

app.listen(process.env.PORT, () => {
    console.log('Listen on port : ', process.env.PORT);
});
