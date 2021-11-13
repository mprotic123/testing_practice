const reverseString = string => {
    if (isNaN(string)) {
        return string.split('').reverse().join('');
    }
    else {
        return null;
    }
}
module.exports = reverseString;
