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
        expect(() => getScreentimeAlertList(users, incorrectDate)).toThrowError('date is required and in format');
        expect(() => getScreentimeAlertList(users, "")).toThrowError('date is required and in format');
    });
});