import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*CEROS IZQ exists*/
test('this function exists', () => {
    expect(functions.cerosIzq).toBeDefined();
});
/*positive*/
test('The result of applyin this function to 5 and 2 should return the string: 05', () => {
    expect(
        functions.cerosIzq(5,2)
    ).toBe('05');
});

/*negative*/
test('The result of applyin this function to 7 and 1 should NOT return the string:  02', () => {
    expect(
        functions.cerosIzq(7,1)
    ).not.toBe('02');
});
