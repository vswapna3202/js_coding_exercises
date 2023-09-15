export function getFillings(sandwich) {
	if (sandwich === undefined || !sandwich.fillings)
        throw new Error('sandwich and fillings are required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined || !person.city)
        throw new Error('person and city person is from is required');
	return person.city === 'Manchester';

}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	if (typeof people !== 'number' || isNaN(people) || people < 0)
        throw new Error ('people needs to be a number');
	const capacity = 40;
	const buses = people / capacity;
	const roundedBuses = (buses % 1 === 0) ? buses : Math.floor(buses) + 1;
	return roundedBuses;
}

export function countSheep(arr) {
	if (arr === undefined || arr.length === 0)
        throw new Error('arr is required');
	let sheepCount = 0;
	for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'sheep')
            sheepCount += 1;
	}
	return sheepCount;
}

export function hasMPostCode(person) {
	if (person === undefined || !person.address.postCode)
        throw new Error('person is required');
	if (typeof person.address.postCode !== 'string')
        throw new Error('postcode should be string');
	return (person.address.postCode.charAt(0) === 'M'
        && person.address.city === 'Manchester');
}
