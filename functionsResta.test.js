import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*RESTA exists*/
test('this function exists', () => {
    expect(functions.resta).toBeDefined();
});
/*positive*/
test('The substraction of 19 - 40 is equal to -21', () => {
    expect(
        functions.resta(19, 40)
    ).toBe(-21);
});
/*negative*/
test('The substraction of 20 + 7 should not be equal to -5', () => {
    expect(
        functions.resta(20, 7)
    ).not.toBe(-5);
});
