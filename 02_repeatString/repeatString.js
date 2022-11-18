const repeatString = function(string, num) {
    const stagingGround = [string];
    if(num === 0) {
        return '';
    } else if(num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < (num - 1); i++) {
            stagingGround.push(string);
        }
        return stagingGround.join('');
    }
}




// Do not edit below this line
module.exports = repeatString;
