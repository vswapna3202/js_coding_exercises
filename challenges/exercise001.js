// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (!word || typeof word !== 'string')
        throw new Error('word is required and must be a string');
	// If word is not capital then capitalise first word
	if(word.charAt(0) !== word.charAt(0).toUpperCase())
        return word.charAt(0).toUpperCase() + word.slice(1);
	else
        return word;
}

export function generateInitials(firstName, lastName) {
	if (!firstName || typeof firstName !== 'string')
        throw new Error('firstName is required and must be a string');
	if (!lastName || typeof lastName !== 'string')
        throw new Error('lastName is required and must be a string');
	return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined || typeof originalPrice !== 'number'
        || isNaN(originalPrice) || originalPrice < 0)
        throw new Error('originalPrice is required and should be a valid number'
        +'greater than 0');
	if (vatRate === undefined || typeof vatRate !== 'number' || isNaN(vatRate) || vatRate < 0)
        throw new Error('vatRate is required and should be a valid number greater than 0');
	let vatAdded = originalPrice + (originalPrice * vatRate / 100);
	return Math.abs(vatAdded % 1) !== 0 ? parseFloat(vatAdded.toFixed(2)) : vatAdded;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined || typeof originalPrice !== 'number'
        || isNaN(originalPrice) || originalPrice < 0)
		throw new Error('originalPrice is required and must be a positive number');
	if (reduction === undefined || typeof reduction !== 'number' || isNaN(reduction) || reduction < 0)
        throw new Error('reduction is required and must be a positive number');
    let salePrice = originalPrice - (originalPrice * reduction / 100);
    return Math.abs(salePrice % 1) !== 0 ? parseFloat(salePrice.toFixed(2)) : salePrice;
}

export function getMiddleCharacter(str) {
	if (!str || typeof str != 'string')
        throw new Error('str is required and must be a string');

    const middleIndex = str.length / 2;
    if (str.length % 2 === 0)
        return str.slice(middleIndex - 1, middleIndex + 1);
    return str.substring(middleIndex,middleIndex+1);
}

export function reverseWord(word) {
	if (!word || typeof word != 'string')
        throw new Error('word is required and should be a string');
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined ||  words.length === 0 || !Array.isArray(words))
        throw new Error('words should be a non-empty array');
	return words.map (word => {
        return word.split('').reverse().join('');
	});
}

export function countLinuxUsers(users) {
	if (users === undefined || users.length === 0 || !Array.isArray(users))
        throw new Error('users is required');
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
	if (n === undefined || typeof n !== 'number' || isNaN(n))
        throw new Error('n is required and must be a number');
	if (n%3 === 0 && n%5 === 0) return "fizzbuzz";
	else if (n % 3 === 0) return "fizz";
	else if (n % 5 === 0) return "buzz";
	else return n;
}
