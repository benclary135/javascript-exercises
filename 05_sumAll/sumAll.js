const sumAll = function(num1, num2) {
    const highNum = Math.max(num1, num2);
    const lowNum = Math.min(num1, num2);
    let total = lowNum;
    if (typeof num1 !== "number" || typeof num2 !== "number" || 
      Math.sign(num1) == -1 || Math.sign(num2) == -1 ) {
        return "ERROR";
    } else {
        for (let i = (lowNum + 1); i <= (highNum); i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
