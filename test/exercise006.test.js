import {
    sumMultiples,
    isValidDNA,
    isItPrime,
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
    test("throws an error for a non array", () => {
        expect(() => sumMultiples("1,2,3")).toThrow();
    });
});

describe("isValidDNA", () => {
    test("returns if entered string has only C,G,T,A characters",() => {
        expect(isValidDNA("CGTACGTACGTA")).toBe(true);
    });
    test("returns false if characters other than C,G,T,A are entered", () => {
        expect(isValidDNA("bdefbdef")).toBe(false);
    });
    test("returns error when String is empty",() =>
        { expect(() => isValidDNA("")).toThrow();
    });
    test("returns error when string is undefined",() => {
        expect(() => isValidDNA(undefined)).toThrow();
    });
    test("returns false when string has numbers",() => {
        expect(isValidDNA(1234)).toBe(false);
    });
});

describe("isItPrime", () => {
    test("returns true if prime number", () => {
        expect(isItPrime(17)).toBe(true);
    });
    test("returns false if not prime number", () => {
        expect(isItPrime(10)).toBe(false);
    });
    test("throws error if number less than or equal to 1", () => {
        expect(() => isItPrime(1)).toThrow();
    });
    test("throws an error for undefined array", () => {
        expect(() => isItPrime(undefined)).toThrow();
    });
});