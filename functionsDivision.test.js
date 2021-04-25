import { expect, test } from "@jest/globals"
import * as functions from "./functions"

/*positive*/
test('The division of 4 by 50 should be .08', () => {
    expect(
        functions.division(4, 50)
    ).toBe(0.08);
});
test('The division of 0 by 11 should be ZERO', () => {
    expect(
        functions.division(0, 11)
    ).toBe(0);
});
/*negative*/
test('The division of 4 by ZERO should return an error message', () => {
    expect(
        functions.division(4, 0)
    ).toBe('you cannot divide by zero');
});