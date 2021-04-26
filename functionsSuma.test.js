import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*SUMA exists*/
test('this function exists', () => {
    expect(functions.suma).toBeDefined();
});

/*positive*/
test('The sum of 5 + 7 is equal to 12', () => {
    expect(
        functions.suma(5, 7)
    ).toBe(12);
});
/*negative*/
test('The sum of 8 + 15 should not be equal to 20', () => {
    expect(
        functions.suma(8, 15)
    ).not.toBe(20);
});
// test('The sum of only one value isntead of two should not return a result', () => {
//     expect(
//         functions.suma(1)
//     ).not.toBeDefined();
// });
