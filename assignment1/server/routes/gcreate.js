let groups = require('../maingroup.js');

module.exports = function(req,res){
    var u = req.body.username;
    groups.push([u]);
}
