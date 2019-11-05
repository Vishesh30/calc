var add = require('vishesh_addmod');
var subtract = require('vishesh_submod');
 
module.exports.addsub = function(x,y){
    var sum = add.add(2,3);
    var diff = subtract.subtract(3,2);

    return "result of addition is " + sum + "result of sub is " + diff;
}

 
console.log("Sum: " + sum + " Diff: " + diff);