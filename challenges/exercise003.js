export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	const squares = []
	nums.forEach(num => {
        squares.push(num * num);
	});
	return squares;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	let camelCaseWords = "";
	words.forEach((word,index) => {
        if(index !== 0){
            camelCaseWords += word.charAt(0).toUpperCase() + word.slice(1);
        }else{
            camelCaseWords += word;
        }
	});
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
	for (const m of menu){
        if(m.ingredients.includes(ingredient)){
            return true;
        }
	}
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	let duplicateArray = [];

    arr1.forEach((item) => {
        if (arr2.includes(item) && !duplicateArray.includes(item)){
           duplicateArray.push(item);
        }
    });
	return duplicateArray.sort((a, b) => a - b);
}
