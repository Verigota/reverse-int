module.exports = function reverse (n) {
    const numToString = Math.abs(n).toString();
    const strToArray = Array.from(numToString);
    return Number(strToArray.reverse().join(''));
    
}


