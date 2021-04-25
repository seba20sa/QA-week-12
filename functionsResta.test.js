import { expect, test } from "@jest/globals"
import * as functions from "./functions"

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
// test('The substraction of only one value isntead of two should not return a result', () => {
//     expect(
//         functions.resta(-7)
//     ).not.toBeDefined();
// });