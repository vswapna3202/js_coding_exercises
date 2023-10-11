export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
    return nums.filter((item) => item < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	return names.filter((item) => (item.startsWith(char)));
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
    return words.filter((item) => (item.substring(0,3) === 'to '));
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter((item) => Number.isInteger(item));
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const cityArray = [];
	users.forEach(user => {
        if (user.data && user.data.city && user.data.city.displayName){
            cityArray.push(user.data.city.displayName);
        }
	});
	return cityArray;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
    return nums.map((item) => parseFloat(Math.sqrt(item).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	const target = new RegExp(`${str}`, 'i')
	const matchingSentence = sentences.filter((sentence) => target.test(sentence));
	return matchingSentence;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	return triangles.map(triangle => Math.max(...triangle));
}
