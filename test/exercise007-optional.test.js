import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} from "../challenges/exercise007-optional.js";

describe("sumDigits", () => {
    test("returns sum of digits of a number", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(0)).toBe(0);
        expect(() => sumDigits(-123)).toThrow();
        expect(() => sumDigits("abc")).toThrow();
        expect(() => sumDigits(undefined)).toThrow();
        expect(() => sumDigits("")).toThrow();
    });
});

describe("createRange", () => {
    test("returns an array", () => {
        expect(createRange(2,10,2)).toEqual([2,4,6,8,10]);
        expect(createRange(1,10,2)).toEqual([1,3,5,7,9]);
        expect(() => createRange("a","b","c")).toThrow();
        expect(() => createRange(0,10,-2)).toThrow();
        expect(() => createRange("","","")).toThrow();
        expect(() => createRange(undefined,10,2)).toThrow();
        expect(() => createRange(1,undefined,2)).toThrow();
        expect(() => createRange(1,5,undefined)).toThrow();
    });
});

describe("getScreentimeAlertList",() => {
    test("returns an array of users",() => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        let date = "2019-05-04";
        expect(getScreentimeAlertList(users, date)).toEqual(["beth_1234"]);
        let incorrectDate = "04-05-2019";
        expect(() => getScreentimeAlertList(users, incorrectDate)).toThrowError('date is required and in format YYYY-MM-DD');
        expect(() => getScreentimeAlertList(users, "")).toThrowError('date is required and in format YYYY-MM-DD');
        expect(() => getScreentimeAlertList(users, undefined)).toThrowError('date is required and in format YYYY-MM-DD');
        expect(() => getScreentimeAlertList(undefined, date)).toThrowError('users is required');
        expect(() => getScreentimeAlertList("", date)).toThrowError('users is required');
    });
});

describe("hexToRGB",() => {
    test("returns an RGB string with decimals", () => {
        expect(hexToRGB("FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("4B0082")).toBe("rgb(75,0,130)");
        expect(() => hexToRGB("4TXYUW")).toThrowError('hexStr is required and must be a valid hexadecimal string');
        expect(() => hexToRGB("FFFFFFF")).toThrowError('hexStr is required and must be a valid hexadecimal string');
        expect(() => hexToRGB("")).toThrowError('hexStr is required and must be a valid hexadecimal string');
        expect(() => hexToRGB(undefined)).toThrowError('hexStr is required and must be a valid hexadecimal string');
    });
});

describe("findWinner", () => {
    test("returns winner in noughts and crosses", () => {
    let board = initialiseBoard(0);
    expect(findWinner(board)).toBe("X");
    board = initialiseBoard(1);
    expect(findWinner(board)).toBe("X");
    board = initialiseBoard(2);
    expect(findWinner(board)).toBe("X");
    board = initialiseBoard(3);
    expect(findWinner(board)).toBe("O");
    board = initialiseBoard(4);
    expect(findWinner(board)).toBe("O");
    board = initialiseBoard(5);
    expect(findWinner(board)).toBe("O");
    board = initialiseBoard(6);
    expect(findWinner(board)).toBe(null);
    board = initialiseBoard(7);
    expect(findWinner(board)).toBe(null);
    board = initialiseBoard(8);
    expect(findWinner(board)).toBe(null);
    board = null;
    expect(() => findWinner(board)).toThrow();
    });
});

const initialiseBoard = (i) => {
    if(i === 0) {
        return [
            ['X','X','X'],
            ['O','O','X'],
            ['X','X','O']
        ];
    }else if (i === 1){
        return [
             ['X','O','X'],
             ['X','O','X'],
             ['X','X','O']
        ];
    }else if (i === 2){
        return [
             ['X','O','X'],
             ['O','X','O'],
             ['O','X','X']
        ];
    }else if (i === 3){
        return [
             ['X','O','O'],
             ['X','O','X'],
             ['O','X','O']
        ];
    }else if (i === 4){
         return [
              ['X','O','O'],
              ['O','O','O'],
              ['O','X','X']
         ];
    }else if (i === 5){
          return [
               ['X','O','X'],
               ['O','O','X'],
               ['X','O','O']
          ];
    }else if (i === 6){
           return [
                ['X','O','X'],
                ['O','O','X'],
                ['X','X','O']
           ];
    }else if (i === 7){
            return [
                 ['X','O','X'],
                 [null,'O','X'],
                 ['X','X',null]
            ];
    }else if (i === 8){
             return [
                  [null,null,null],
                  [null,null,null],
                  [null,null,null]
             ];
    }

};