// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined || word == "") throw new Error('word is required');
	if (typeof word !== 'string') throw new Error('word must be a string');
	if(word.charAt(0) !== word.charAt(0).toUpperCase())
	    return word.charAt(0).toUpperCase() + word.slice(1);
	else
	    return word;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined || firstName == "")
	    throw new Error('firstName is required');
	if (lastName === undefined || lastName == "")
	    throw new Error('lastName is required');
	if (typeof firstName !== 'string') throw new Error('firstName should be a string');
	if (typeof lastName !== 'string') throw new Error('lastName should be a string');
	return firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined) throw new Error('originalPrice is required');
	if (vatRate === undefined) throw new Error('vatRate is required');
    if (typeof originalPrice !== 'number' || isNaN(originalPrice))
        throw new Error('Valid numbers must be entered to addVAT')
    if (typeof vatRate !== 'number' || isNaN(vatRate))
        throw new Error('Valid numbers must be entered to addVAT')
	if (originalPrice < 0 || vatRate < 0) throw new Error('Positive numbers are needed to addVAT to originalPrice')
	let vatAdded = originalPrice + (originalPrice * vatRate / 100);
	if (vatAdded % 1 !== 0) return parseFloat(vatAdded.toFixed(2));
	return vatAdded;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	if (typeof originalPrice !== 'number' || isNaN(originalPrice))
	    throw new Error('Valid numbers must be entered to getSalePrice')
	if (typeof reduction !== 'number' || isNaN(originalPrice))
    	    throw new Error('Valid numbers must be entered to getSalePrice')
    if (originalPrice < 0 || reduction < 0)
        throw new Error('Positive numbers are needed to getSalePrice from originalPrice')
    let salePrice = originalPrice - (originalPrice * reduction / 100);
    if (salePrice % 1 !== 0) return parseFloat(salePrice.toFixed(2));
    return salePrice;
}

export function getMiddleCharacter(str) {
	if (str === undefined || str == "") throw new Error('str is required');
	if (typeof str != 'string') throw new Error('str should be a string');
    const length = Math.floor(str.length);
    const middleIndex = length / 2;
    if (length % 2 === 0)
        return str.slice(middleIndex - 1, middleIndex + 1);
    return str.substring(middleIndex,middleIndex+1);
}

export function reverseWord(word) {
	if (word === undefined || word == "") throw new Error('word is required');
	if (typeof word != 'string') throw new Error('word should be a string');
	let reverseString = '';
	for(let i=word.length - 1; i >=0; i--){
	    reverseString += word[i];
	}
    return reverseString;
}

export function reverseAllWords(words) {
	if (words === undefined ||  words.length === 0 || !Array.isArray(words))
	    throw new Error('words should be a non-empty array');
	return words.map (word => {
	    return word.split('').reverse().join('');
	});
}

export function countLinuxUsers(users) {
	if (users === undefined || users.length === 0 || !Array.isArray(users)) throw new Error('users is required');
	const linuxUsers = users.filter(user => user.type === 'Linux');
	return linuxUsers.length;
}

export function getMeanScore(scores) {
	if (scores === undefined || scores.length === 0 || !Array.isArray(scores))
	    throw new Error('scores is required');
	const sum = scores.reduce((acc, score) => acc + score, 0);
	const mean = sum / scores.length;
	return Math.round(mean * 100) / 100;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	if (typeof n !== 'number' || isNaN(n)) throw new Error('n needs to be a number')
	if (n%3 === 0 && n%5 === 0) return "fizzbuzz";
	else if (n % 3 === 0) return "fizz";
	else if (n % 5 === 0) return "buzz";
	else return n;
}
