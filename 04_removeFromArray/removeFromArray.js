const removeFromArray = function(startArray, ...args) {
    for (let i = 0; i < startArray.length; i++) {
        for (let x = 0; x < args.length; x++) {
            if (args[x] === startArray[i]) {
                startArray.splice(i, 1);
            }
        }
    }
    return startArray;
};

// Do not edit below this line
module.exports = removeFromArray;
