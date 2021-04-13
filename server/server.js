require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use( require('./routes/usuario') );

mongoose.connect(process.env.URLDB ,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, res) => {
    if(err) throw err;
    console.log('MongoDB connected');
});
app.listen(process.env.PORT, () => {
    console.log('Listen on port : ', process.env.PORT);
});
