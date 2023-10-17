export function capitalize(word: string) : string {
	// If word is not capital then capitalise first word
	if(word.charAt(0) !== word.charAt(0).toUpperCase())
        return word.charAt(0).toUpperCase() + word.slice(1);
	else
        return word;
}

export function generateInitials(firstName: string, lastName: string) : string {	
	return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;
}

export function addVAT(originalPrice: number, vatRate: number) : number {
	if (originalPrice < 0)
        throw new Error('originalPrice is required and should be a valid number'
        +' greater than 0');
	if (vatRate < 0)
        throw new Error('vatRate is required and should be a valid number greater than 0');
	
	const vatAdded = originalPrice + (originalPrice * vatRate / 100);
	return Math.abs(vatAdded % 1) !== 0 ? parseFloat(vatAdded.toFixed(2)) : vatAdded;
}

export function getSalePrice(originalPrice: number, reduction: number) : number {
	if (originalPrice < 0)
		throw new Error('originalPrice is required and must be a positive number');
	if (reduction < 0)
        throw new Error('reduction is required and must be a positive number');
    const salePrice = originalPrice - (originalPrice * reduction / 100);
    return Math.abs(salePrice % 1) !== 0 ? parseFloat(salePrice.toFixed(2)) : salePrice;
}

export function getMiddleCharacter(str: string) : string{
    const middleIndex = str.length / 2;
    if (str.length % 2 === 0)
        return str.slice(middleIndex - 1, middleIndex + 1);
    return str.substring(middleIndex,middleIndex+1);
}

export function reverseWord(word : string) {	
	return word.split('').reverse().join('');
}


export function reverseAllWords(words : string[]) {
	if (words === undefined ||  words.length === 0 || !Array.isArray(words))
        throw new Error('words should be a non-empty array');
	return words.map (word => {
        return word.split('').reverse().join('');
	});
}

interface User {
	type: string;
}

export function countLinuxUsers(users: User[]): number {
	if (users === undefined || users.length === 0 || !Array.isArray(users))
        throw new Error('users is required');
    const USER_TYPE = 'Linux';
	const linuxUsers = users.filter(user => user.type === USER_TYPE);
	return linuxUsers.length;
}

export function getMeanScore(scores: number[]): number {
	if (scores === undefined || scores.length === 0 || !Array.isArray(scores))
        throw new Error('scores is required');
	const sum = scores.reduce((acc, score) => acc + score, 0);
	const mean = sum / scores.length;
	return Math.round(mean * 100) / 100;
}

export function simpleFizzBuzz(n: number): string|number{
    const FIZZ = "fizz";
    const BUZZ = "buzz";
	if (n%3 === 0 && n%5 === 0) return FIZZ+BUZZ;
	else if (n % 3 === 0) return FIZZ;
	else if (n % 5 === 0) return BUZZ;
	else return n;
}
