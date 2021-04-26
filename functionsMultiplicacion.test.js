import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*MULTIPLICACION exists*/
test('this function exists', () => {
    expect(functions.multiplicacion).toBeDefined();
});
/*positive*/
test('The multiplication of 23 * 5 should be equal to 115', () => {
    expect(
        functions.multiplicacion(23, 5)
    ).toBe(115);
});

/*negative*/
test('The multiplication of -10 * 6.5 should not be equal to 2.3', () => {
    expect(
        functions.multiplicacion(-10, 6.5)
    ).not.toBe(2.3);
});
// test('The product of only one value isntead of two should not return a result', () => {
//     expect(
//         functions.multiplicacion(3)
//     ).not.toBeDefined();
// });
// test('The multiplication of a number by a non number should not be a defined result', () => {
//     expect(
//         functions.multiplicacion(7, 'b')
//     ).not.toBeDefined();
// });
