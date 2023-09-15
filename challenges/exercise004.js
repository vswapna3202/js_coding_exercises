export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
    const newNumArray = nums.filter(function(item) {
        return item < 1;
    });
    return newNumArray;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const newNamesArray = names.filter(function(item){
        return (item.charAt(0) === char)
	});
	return newNamesArray;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
    const verbsArray = words.filter(function(item){
        return (item.substring(0,3) === 'to ')
    });
    return verbsArray;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const integerArray = nums.filter(function(item){
        return Number.isInteger(item);
	});
	return integerArray;
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
    const squareRootsArray = nums.map(function(item){
        return parseFloat(Math.sqrt(item).toFixed(2));
    });
    return squareRootsArray;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	str = str.toLowerCase();
	const matchingSentence = sentences.filter(function(sentence){
        const lowerCaseSentence = sentence.toLowerCase();
        return lowerCaseSentence.includes(str);
	});
	return matchingSentence;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const longestSide = triangles.map(triangle => Math.max(...triangle));
	return longestSide;
}
