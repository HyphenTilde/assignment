let Class = require('../mainclass.js');
let users = require('../mainuser.js');

module.exports = function(req,res){
    var u = req.body.username;
    var e = req.body.email;
    let i = 0;

    for(; i < users.length ; i++){
        if(users[i] == u){
            res.send('User already exists.');
        }
    }
    var id = String(i);
    console.log('b');
    let newuser = new Class(u, id, e, 'Group Admin');
    users.push(newuser);
    res.send('User successfully created.');
}