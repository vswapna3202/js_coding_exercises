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
    });
});

describe("createRange", () => {
    test("returns an array", () => {
        expect(createRange(2,10,2)).toEqual([2,4,6,8,10]);
        expect(createRange(1,10,2)).toEqual([1,3,5,7,9]);
        expect(() => createRange("a","b","c")).toThrow();
        expect(() => createRange(0,10,-2)).toThrow();
    });
});