import {
    sumMultiples,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns sum of numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([3,4,5,8,9,15,18,21,24,22,27,28])).toBe(122);
    });
    test("returns sum of numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([2,4,8,14,16])).toBe(0);
    });
    test("returns sum of numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([3,6,9,12,15,18,21,24,27,30])).toBe(165);
    });
    test("returns sum of numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([5,10,15,20,25,30,35,40,45,50])).toBe(275);
    });
    test("returns sum of numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([-5,-10,-15,-20])).toBe(-50);
    });
    test("throws an error for non-numeric values", () => {
        expect(() => sumMultiples(["a", "b", "c", "d", "e"])).toThrow();
    });
    test("throws an error for empty array", () => {
        expect(() => sumMultiples([])).toThrow();
    });
});