"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleFizzBuzz = exports.getMeanScore = exports.countLinuxUsers = exports.reverseAllWords = exports.reverseWord = exports.getMiddleCharacter = exports.getSalePrice = exports.addVAT = exports.generateInitials = exports.capitalize = void 0;
function capitalize(word) {
    // If word is not capital then capitalise first word
    if (word.charAt(0) !== word.charAt(0).toUpperCase())
        return word.charAt(0).toUpperCase() + word.slice(1);
    else
        return word;
}
exports.capitalize = capitalize;
function generateInitials(firstName, lastName) {
    return "".concat(firstName.charAt(0).toUpperCase(), ".").concat(lastName.charAt(0).toUpperCase());
}
exports.generateInitials = generateInitials;
function addVAT(originalPrice, vatRate) {
    if (originalPrice < 0)
        throw new Error('originalPrice is required and should be a valid number'
            + ' greater than 0');
    if (vatRate < 0)
        throw new Error('vatRate is required and should be a valid number greater than 0');
    var vatAdded = originalPrice + (originalPrice * vatRate / 100);
    return Math.abs(vatAdded % 1) !== 0 ? parseFloat(vatAdded.toFixed(2)) : vatAdded;
}
exports.addVAT = addVAT;
function getSalePrice(originalPrice, reduction) {
    if (originalPrice < 0)
        throw new Error('originalPrice is required and must be a positive number');
    if (reduction < 0)
        throw new Error('reduction is required and must be a positive number');
    var salePrice = originalPrice - (originalPrice * reduction / 100);
    return Math.abs(salePrice % 1) !== 0 ? parseFloat(salePrice.toFixed(2)) : salePrice;
}
exports.getSalePrice = getSalePrice;
function getMiddleCharacter(str) {
    var middleIndex = str.length / 2;
    if (str.length % 2 === 0)
        return str.slice(middleIndex - 1, middleIndex + 1);
    return str.substring(middleIndex, middleIndex + 1);
}
exports.getMiddleCharacter = getMiddleCharacter;
function reverseWord(word) {
    return word.split('').reverse().join('');
}
exports.reverseWord = reverseWord;
function reverseAllWords(words) {
    if (words === undefined || words.length === 0 || !Array.isArray(words))
        throw new Error('words should be a non-empty array');
    return words.map(function (word) {
        return word.split('').reverse().join('');
    });
}
exports.reverseAllWords = reverseAllWords;
function countLinuxUsers(users) {
    if (users === undefined || users.length === 0 || !Array.isArray(users))
        throw new Error('users is required');
    var USER_TYPE = 'Linux';
    var linuxUsers = users.filter(function (user) { return user.type === USER_TYPE; });
    return linuxUsers.length;
}
exports.countLinuxUsers = countLinuxUsers;
function getMeanScore(scores) {
    if (scores === undefined || scores.length === 0 || !Array.isArray(scores))
        throw new Error('scores is required');
    var sum = scores.reduce(function (acc, score) { return acc + score; }, 0);
    var mean = sum / scores.length;
    return Math.round(mean * 100) / 100;
}
exports.getMeanScore = getMeanScore;
function simpleFizzBuzz(n) {
    var FIZZ = "fizz";
    var BUZZ = "buzz";
    if (n % 3 === 0 && n % 5 === 0)
        return FIZZ + BUZZ;
    else if (n % 3 === 0)
        return FIZZ;
    else if (n % 5 === 0)
        return BUZZ;
    else
        return n;
}
exports.simpleFizzBuzz = simpleFizzBuzz;
