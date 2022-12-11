//Print the array process.argv: [node, path, arg1, arg2, etc.]
//console.log(process.argv)

var userArgs = process.argv; //Array of Arguments
var total = 0;

//loop through the array from index 2 adding all integers
for (let i = 2; i < userArgs.length; i++) {
  total += parseInt(userArgs[i]);
}

console.log(total);
