import { expect, test } from "@jest/globals"
import * as functions from "./functions"
/*TABLA MULT exists*/
test('this function exists', () => {
    expect(
        functions.tablaMultiplicar
    ).toBeDefined();
});
/*positive*/
test('If we set up the multiplicator at -2 and the mult at 3 we should get the following array', () => {
    expect(
        functions.tablaMultiplicar(-2,3)
    ).toEqual([-0, -2, -4, -6]);
});
test('If we do not define a multiplicator param we should get a default one set  at 10', () => {
    expect(
        functions.tablaMultiplicar(2)
    ).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});

/*negative*/
test('If we set up the multiplicator at 1 and the mult at 5 we should NOT get the following array', () => {
    expect(
        functions.tablaMultiplicar(1,5)
    ).not.toEqual([0, -2, -4, -6]);
});