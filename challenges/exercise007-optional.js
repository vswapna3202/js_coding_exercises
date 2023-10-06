/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
	if (n === undefined || typeof n !== 'number' || n < 0)
        throw new Error('n is required');
	var sum = 0;
	while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
	}
	return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
	if (start === undefined || typeof start != 'number' || start < 0)
        throw new Error('start is required and must be positive');

	if (end === undefined || typeof end != 'number' || end < 0)
        throw new Error('end is required and must be positive');

	if (step === undefined || typeof step != 'number' || step <= 0)
		throw new Error('step is required and must be positive');

    let rangeArray = [];
    if (step > 0 && start < end) {
        for(let i = start; i <= end; i += step){
            rangeArray.push(i);
        }
    }else {
        throw new Error('Invalid inputs provided, start has to be lesser than end')
    }
    return rangeArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
    var datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
	if (users === undefined || users === "") throw new Error('users is required');
	if (date === undefined || date === "" || !date.match(datePattern)){
        throw new Error('date is required and in format YYYY-MM-DD');
	}

	const alertUsers = [];
	users.forEach((user) => {
        user.screenTime.forEach((usage) => {
            if (usage.date == date){
                let totalUsage = Object.values(usage.usage).reduce((acc,curr) => acc + curr, 0);
                if (totalUsage > 100){
                    alertUsers.push(user.username);
                }
            }
        });
	});
    return alertUsers;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
    const isValidHex = (hexStr) => /^[0-9A-Fa-f]{6}$/.test(hexStr);
	if (hexStr === undefined || typeof hexStr != 'string' || !isValidHex(hexStr))
        throw new Error('hexStr is required and must be a valid hexadecimal string');
	let strR = hexStr.substring(0,2);
	let strG = hexStr.substring(2,4);
	let strB = hexStr.substring(4,6);
	let rDecimal = hexaToDecimalConverter(strR);
	let gDecimal = hexaToDecimalConverter(strG);
	let bDecimal = hexaToDecimalConverter(strB);
	return `rgb(${rDecimal},${gDecimal},${bDecimal})`;
};

const hexaToDecimalConverter = (hex) => {
    if (hex !== undefined){
        return parseInt(hex, 16);
    }
}
/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
	if (board === undefined) throw new Error('board is required');

	let i = 0;
	let j = 0;
	//check for two diagonals if any true then return back any element value
	if(board[i][j] === board[i+1][j+1] && board[i][j] === board[i+2][j+2])
        return board[i][j];
	if(board[i][j+2] === board[i+1][j+1] && board[i][j+2] === board[i+2][j])
        return board[i][j+2];

    //check for rows if any true then return back any element value
    j = 0;
    for(i = 0; i < 3; i++){
        if(board[i][j] === board[i][j+1] && board[i][j] === board[i][j+2])
            return board[i][j];
    }

    //check for columns if any true then return back any element value
    i = 0;
    for (j = 0; j < 3; j++){
        if(board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j])
            return board[i][j];
    }
    return null;

};
