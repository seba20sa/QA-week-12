import { expect, test } from "@jest/globals"
import * as functions from "./functions"

/*TEXTO exists*/
test('this function exists', () => {
    expect(functions.texto).toBeDefined();
});


/*positive*/
test('this function will return the text passed as the param', () => {
    expect(
        functions.texto('example')
    ).toBe('example');
});
/*negative*/
test('this function will not  return an empty text', () => {
    expect(
        functions.texto('example')
    ).not.toBe('');
});
     


