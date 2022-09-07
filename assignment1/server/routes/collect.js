let groups = require('../maingroup.js');
let channels = require('../maingroup.js');

module.exports = function(req,res){
    var n = req.body.username;
    var temp_array = [];

    for(var i = 0; i < groups.length; i++){
        for(var j = 0; j < groups[i].length; j++){
            if(n == groups[i][j]){
                temp_array.push(i);
            }
        }
    }
    res.send(temp_array);
}