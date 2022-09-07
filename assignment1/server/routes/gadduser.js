let groups = require('../maingroup.js');
module.exports = function(req,res){
    var u = req.body.username;
    var id = req.body.id;
    let i = 0;
    for(; i < groups.length; i++){
        for(let j = 0; j < groups[i].length; j++){
            if((u == groups[i][j]) && (id == i)){
                res.send('User is already part of this group.');
                break;
            } else if((id==i) && (j==groups[i].length-1)){
                groups[i].push(u);
                res.send('User successfully added.');
                break;
            }
        }
    }
}