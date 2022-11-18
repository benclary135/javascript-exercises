const reverseString = function(string) {
    const initialArray = Array.from(string);
    const reverseArray = [];
    if (string == '') {
        return '';
    } else {
        for (i=0; i<(string.length)+1; i++){
            reverseArray[i] = initialArray[(string.length)-i];
        }
        return reverseArray.join('');
    }
};

// Do not edit below this line
module.exports = reverseString;
