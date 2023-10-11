export function getFillings(sandwich) {
	if (sandwich === undefined || !sandwich.fillings)
        throw new Error('sandwich and fillings are required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
    const TARGET_CITY = 'Manchester';
	if (person === undefined || !person.city)
        throw new Error('person and city person is from is required');
	return person.city === TARGET_CITY;

}

export function getBusNumbers(people) {
    const BUS_CAPACITY = 40;
	if (people === undefined) throw new Error('people is required');
	if (typeof people !== 'number' || people < 0)
        throw new Error ('people needs to be a number');

	const buses = people / BUS_CAPACITY;
	const roundedBuses = (buses % 1 === 0) ? buses : Math.floor(buses) + 1;
	return roundedBuses;
}

export function countSheep(arr) {
    const ARRAY_ITEM = 'sheep';
	if (arr === undefined || arr.length === 0)
        throw new Error('arr is required');
	let sheepCount = 0;
	for (let i = 0; i < arr.length; i++){
        if (arr[i] === ARRAY_ITEM)
            sheepCount += 1;
	}
	return sheepCount;
}

export function hasMPostCode(person) {
    const TARGET_CITY = 'Manchester';
    const POST_CODE_START = 'M';
	if (person === undefined || !person.address.postCode)
        throw new Error('person is required');
	if (typeof person.address.postCode !== 'string')
        throw new Error('postcode should be string');
	return (person.address.postCode.charAt(0) === POST_CODE_START
        && person.address.city === TARGET_CITY);
}
