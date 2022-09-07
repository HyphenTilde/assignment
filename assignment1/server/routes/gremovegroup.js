let groups = require('../maingroup.js');
module.exports = function(req,res){
    let u = req.body.username;
    let id = req.body.id;
    if(id > groups.length){
        res.send('ID is invalid.');
    } else if(id<=groups.length){
        for(let j = 0; j < groups[id].length; j++){
            groups[id].splice(j,1);
        }
        groups.splice(id,1);
    }
}