var express = require('express');
var app = express();
var http = require('http').Server(app);

var cors = require('cors');
app.use(cors());
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/assignment')));

var server = http.listen(3000, function(){
    console.log("Listening.");
});

app.post('/api/auth',require('./routes/login'));
app.post('/api/collect',require('./routes/collect'));
app.post('/api/screate',require('./routes/screate'));
app.post('/api/sremove',require('./routes/sremove'));
app.post('/api/supgrade',require('./routes/supgrade'));

app.get('/*',function(req,res,next){
    res.sendFile('index.html',{ root:'../dist/assignment1' });
});