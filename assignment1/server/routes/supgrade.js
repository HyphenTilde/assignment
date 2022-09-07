let Class = require('../mainclass.js');
let users = require('../mainuser.js');

module.exports = function(req,res){
    var u = req.body.username;
    var e = req.body.email;

    for(let i = 0; i < users.length ; i++){
        console.log(users[i].username);
        if(users[i].username == u){
            users[i].role = 'Super Admin';
            console.log('e');
            res.send('User succesfully updated.');
        }
    }
}