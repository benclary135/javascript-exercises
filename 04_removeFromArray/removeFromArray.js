const removeFromArray = function(startArray, ...arguments) {
    const toRemove = Array.from(arguments);
    for (i = 0; i < startArray.length; i++) {
        for (x = 0; x < toRemove.length; x++) {
            if (toRemove[x] === startArray[i]) {
                
            }
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
