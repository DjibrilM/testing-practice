
import { stringLength, reverseString,capitalize } from ".";
import { Calculator } from "./calculator";



describe("string", () => {
    it("should convert string to array(object) ", () => {
        const stringArr = stringLength("a very simple string");
        expect(typeof stringArr).toBe("object");
    });

    it("string should be least 1 character long and not longer than 10 characters.", () => {
        const stringArr = stringLength("my  ");
        expect(stringArr.length).toBeLessThan(10);
        expect(stringArr.length).toBeGreaterThan(1);
    });

    it("string should be reverse", () => {
        const reversedString = reverseString("nad");
        expect(reversedString).toBe("dan");
    })
})

describe("calculator", () => {
    it("should add ", () => {
        const addition = new Calculator(10, 10).add();
        expect(addition).toBe(20);
    });

    it("should divide", () => {
        const division = new Calculator(10, 10).division();
        expect(division).toBe(1);
    });

    it("should multiply", () => {
        const multiply = new Calculator(10, 10).multiply();
        expect(multiply).toBe(100);
    });


    it("should capitalize first letter", () => {
        const capitalizedString = capitalize("dinosaurs");
        expect(capitalizedString).toBe("Dinosaurs");
    });
})