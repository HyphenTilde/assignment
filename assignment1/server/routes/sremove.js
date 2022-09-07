let Class = require('../mainclass.js');
let users = require('../mainuser.js');

module.exports = function(req,res){
    var u = req.body.username;
    var e = req.body.email;
    for(let i = 0; i < users.length ; i++){
        if(users[i].username == u){
            users.splice(i,1);
            res.send('User successfully deleted.');
        }
    }
}

