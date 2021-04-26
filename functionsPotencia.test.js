import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*POTENCIA exists*/
test('this function exists', () => {
    expect(functions.potencia).toBeDefined();
});
/*positive*/
test('-1 to the power of 5 should be -1', () => {
    expect(
        functions.potencia(-1,5)
    ).toBe(-1);
});

/*negative*/
test('-1 to the power of 6 should NOT be -1', () => {
    expect(
        functions.potencia(-1,6)
    ).not.toBe('-1');
});