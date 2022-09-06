Class = require('./mainclass');

module.exports = function(req,res){
    var u = req.body.username;
    var e = req.body.email;
    var i = req.body.id;

    var newuser = new User(u, i, e, 'user');
    for(var x = 0; x < Class.users.length; x++){
        if(Class.users[x].username == u){
            res.send({'username':Class.user[x].username,'email':Class.user[x].email,'id':Class.user[x].id, 'role':Class.user[x].role});
        }
    }
    Class.users.push(newuser);
    res.send({'username':newuser.username,'email':newuser.email,'id':newuser.id, 'role':newuser.role});

}
