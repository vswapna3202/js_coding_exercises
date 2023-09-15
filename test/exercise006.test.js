import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns sum of numbers which are multiples of 3 or 5", () => {
        expect(sumMultiples([3,4,5,8,9,15,18,21,24,22,27,28])).toBe(122);
    });
    test("returns 0 as numbers are not multiples of 3 or 5", () => {
        expect(sumMultiples([2,4,8,14,16])).toBe(0);
    });
    test("returns sum of numbers which are multiples of 3", () => {
        expect(sumMultiples([3,6,9,12,15,18,21,24,27,30])).toBe(165);
    });
    test("returns sum of numbers which are multiples of 5", () => {
        expect(sumMultiples([5,10,15,20,25,30,35,40,45,50])).toBe(275);
    });
    test("returns sum of negative numbers which are multiples of 3 or 5", () => {
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
    test("returns true if entered string has only C,G,T,A characters",() => {
        expect(isValidDNA("CGTACGTACGTA")).toBe(true);
    });
    test("returns false if characters other than C,G,T,A are entered", () => {
        expect(isValidDNA("bdefbdef")).toBe(false);
    });
    test("throws error when String is empty",() =>
        { expect(() => isValidDNA("")).toThrow();
    });
    test("throws error when string is undefined",() => {
        expect(() => isValidDNA(undefined)).toThrow();
    });
    test("throws false when string has numbers",() => {
        expect(isValidDNA(1234)).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("returns complementary DNA string (T:A,C:G)",() => {
        expect(getComplementaryDNA("CTAG")).toBe("GATC");
    });
    test("returns empty string if characters other than C,G,T,A are entered", () => {
        expect(getComplementaryDNA("bdefbdef")).toBe("");
    });
    test("throws error when String is empty",() =>
        { expect(() => getComplementaryDNA("")).toThrow();
    });
    test("throws error when string is undefined",() => {
        expect(() => getComplementaryDNA(undefined)).toThrow();
    });
    test("throws error when string has numbers",() => {
        expect(() => getComplementaryDNA(1234)).toThrow();
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
    test("throws an error for undefined number", () => {
        expect(() => isItPrime(undefined)).toThrow();
    });
    test("throws an error for alphabet instead of number", () => {
        expect(() => isItPrime("a")).toThrow();
    });
    test("throws an error for special character instead of number", () => {
        expect(() => isItPrime("%%")).toThrow();
    });
});

describe("createMatrix", () => {
    const testMatrix = [["foo","foo","foo"],["foo","foo","foo"],["foo","foo","foo"]];
    test("returns a matrix of size n and elements foo",() => {
        expect(createMatrix(3,"foo")).toEqual(testMatrix);
    });
    const testMatrixNew = [[4,4],[4,4]];
    test("returns a matrix of size n and elements 4",() => {
        expect(createMatrix(2,4)).toEqual(testMatrixNew);
    });

    test("throws an error for undefined n and foo for fill", () => {
        expect(() => createMatrix(undefined, "foo")).toThrow();
    });
    test("throws an error for n as 3 and undefined fill", () => {
        expect(() => createMatrix(3, undefined)).toThrow();
    });
    test("throws an error for n and empty fill", () => {
        expect(() => createMatrix(3, "")).toThrow();
    });
    test("throws an error for undefined n and fill", () => {
        expect(() => createMatrix(undefined,undefined)).toThrow();
    });
    test("throws an error for foo as n and number 3 as fill", () => {
        expect(() => createMatrix("foo",3)).toThrow();
    });
});

describe("areWeCovered", () => {
    const staffTest = [
                      { name: "Sally", rota:  ["Monday","Tuesday","Wednesday"] },
                      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]},
                      { name: "Mike",  rota: ["Saturday","Sunday","Monday"]},
                      { name: "Amelia",rota: ["Friday","Saturday","Sunday","Monday"]}
                      ];

    test("returns true if at least 3 staff are available for day", () => {
        const dayTest = 'Sunday';
        expect(areWeCovered(staffTest, dayTest)).toBe(true);
    });
    test("returns false if less than 3 staff are available for day", () => {
        const dayTest = 'Tuesday';
        expect(areWeCovered(staffTest, dayTest)).toBe(false);
    });
    test("throws error if staffTest array is undefined", () => {
         const dayTest = 'Tuesday';
         expect(() => areWeCovered(undefined, dayTest)).toThrow();
    });
   test("throws error if day is undefined", () => {
         expect(() => areWeCovered(staffTest, undefined)).toThrow();
   });
   test("throws error if staffTest is empty", () => {
        const staffTest = [];
        const dayTest = 'Wednesday';
        expect(() => areWeCovered(staffTest, dayTest)).toThrow();
   });
    test("throws error if staffTest array name is empty", () => {
        const dayTest = 'Wednesday';
        const staffTest1 = [{name: '', rota: ['Sunday','Monday']}];
        expect(() => areWeCovered(staffTest1, dayTest)).toThrow();
   });
    test("throws error if rota array is empty", () => {
        const dayTest = 'Wednesday';
        let staffTest1 = [{name: 'Peter', rota: []}];
        expect(() => areWeCovered(staffTest1, dayTest)).toThrow();
   });
});