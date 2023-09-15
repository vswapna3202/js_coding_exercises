/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined || arr.length === 0) throw new Error('arr is required');
	if (!Array.isArray(arr)) {
        throw new Error('arr should be an array');
    }
	let sum = 0;
	arr.forEach((num) => {
        if (num === undefined || typeof num !== 'number' || isNaN(num))
            throw new Error('number is required');
        if((num % 3 === 0) || (num%5 === 0)){
            sum += num;
        }
	});
	return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined || str.length === 0) throw new Error('str is required');
	const regEx = /[CGTA]/;
	return regEx.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined || str.length === 0) throw new Error('str is required');
	if (!isNaN(str)) throw new Error('str is required with letters CTAG');
	const complementaryBases = {
        'A' : 'T','T' : 'A','C' : 'G','G' : 'C'
	};
	let complementaryStr = '';
	for(const char of str){
        if (complementaryBases[char]){
            complementaryStr += complementaryBases[char];
        }
	}
	return complementaryStr;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined || n <= 1 || isNaN(n) || typeof n !== 'number')
        throw new Error('n is required and should be greater than 1');

    for(let i = 2; i <= Math.sqrt(n) ; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined || typeof n !== 'number' || isNaN(n) || n < 1)
        throw new Error('n is required and should be a number > 1');
	if (fill === undefined || fill.length === 0)
        throw new Error('fill is required and should be a string');
	const matrix = [];
	for(let i=0;i < n; i++){
        const row = [];
        for(let j=0;j < n; j++){
            row.push(fill);
        }
        matrix.push(row);
	}
	return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined || staff.length === 0)
        throw new Error('staff is required');
	if (day === undefined || typeof day !== 'string' || !isNaN(day))
        throw new Error('day is required');
	let staffCount = 0;
	staff.forEach((staffName => {
        if (staffName.name === undefined || staffName.name.length === 0)
            throw new Error('staff is required');
        if(staffName.rota === undefined || staffName.rota.length === 0)
            throw new Error('staff rota is not defined');
        staffName.rota.forEach((rotaSchedule) => {
            if (rotaSchedule.includes(day)){
                staffCount ++;
            }
        });
	}));
	return staffCount >= 3;
};