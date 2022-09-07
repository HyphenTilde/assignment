let User = require('../mainclass.js');
let users = require('../mainuser.js');

module.exports = function(req,res){
    var u = req.body.username;
    var e = req.body.email;
    var i = req.body.id;

    var newuser = new User(u, i, e, 'user');

    for(var x = 0; x < users.length; x++){

        if(users[x].username == u){
            res.send({'username':users[x].username,'email':users[x].email,'id':users[x].id, 'role':users[x].role});
        }
    }

    //users.push(newuser);
    //res.send({'username':newuser.username,'email':newuser.email,'id':newuser.id, 'role':newuser.role});

}
