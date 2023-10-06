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