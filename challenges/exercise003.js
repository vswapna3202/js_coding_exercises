export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	let squares = []
	for(let i=0;i<nums.length;i++){
        squares.push(nums[i] * nums[i]);
	}
	return squares;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	let camelCaseWords = "";
	for (let i = 0; i < words.length; i++){
        if( i !== 0)
            camelCaseWords = camelCaseWords+words[i].charAt(0).toUpperCase()+words[i].slice(1);
        else
            camelCaseWords = words[i];
	}
	return camelCaseWords;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	return people.reduce((totalSubjects, person) => {
        return totalSubjects + person.subjects.filter(subject => subject !== "").length;
    },0);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');

	for (let i = 0; i < menu.length; i++){

        if(menu[i].ingredients.includes(ingredient)){
            return true;
        }
	}
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	let duplicateArray = [];
	for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i]) && !duplicateArray.includes(arr1[i])){
            duplicateArray.push(arr1[i]);
        }
	}
	return duplicateArray.sort((a, b) => a - b);
}
