import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*ANIDADA exists*/
test('this function exists', () => {
    expect(
        functions.anidada
    ).toBeDefined();
});
/*positive*/
test('The sum of the squares of -1 and 6 should be 37', () => {
    expect(
        functions.anidada(-1,6)
    ).toEqual(37);
});
test('The sum of the squares of 2 and 0.5 should be 4.25', () => {
    expect(
        functions.anidada(2, 0.5)
    ).toEqual(4.25);
});
/*negative*/
test('The sum of the squares of 13 and 11 should NOT be 3', () => {
    expect(
        functions.anidada(13,11)
    ).not.toEqual('3');
});
