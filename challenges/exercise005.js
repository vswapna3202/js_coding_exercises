export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	const index = nums.indexOf(n);
	if (index === -1 || index === nums.length - 1){
        return null;
	}
	return nums[index+1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (!/^[01]+$/.test(str)){
        throw new Error('number should  have only ones and zeros');
	}
	const counts = {"0" : 0,"1": 0};
	for(const bit of str){
        counts[bit]++;
	}
	return counts;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	const reverseNumber = n.toString().split('').reverse().join('');
	return parseInt(reverseNumber);
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	const total = arrs.reduce((acc, currRow) => {
        return acc + currRow.reduce((rowItemSum, item) => rowItemSum + item, 0);
	}, 0);
	return total;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	if (arr.length < 2) return arr;
	const firstElement = arr.shift();
	const lastElement = arr.pop();
	arr.unshift(lastElement);
	arr.push(firstElement);
	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	const values = Object.values(haystack);
	const ifFound = values.some(item => typeof item === 'string' &&
        item.toLowerCase().includes(searchTerm.toLowerCase()));
	return ifFound;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	const words = str.toLowerCase().match(/\w+/g) || [];
	return words.reduce((frequencies, word) => {frequencies[word] = (frequencies[word] || 0) + 1; return frequencies},{});
};
