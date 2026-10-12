import { divide } from '../src/calculator.js';

describe('divide() function tests', () => {
    
    // 1. Positive Test
    test('should divide two valid numbers correctly', () => {
        expect(divide(6, 2)).toBe(3);
    });

    // 2. Negative Test: Non-number arguments
    test('should throw TypeError when arguments are not numbers', () => {
        expect(() => divide('6', 2)).toThrow(TypeError);
        expect(() => divide('6', '2')).toThrow("Both arguments must be numbers");
    });

    // 3. Negative Test: NaN arguments
    test('should throw TypeError when arguments are NaN', () => {
        expect(() => divide(NaN, 2)).toThrow(TypeError);
        expect(() => divide(6, NaN)).toThrow("Arguments cannot be NaN");
    });

    // 4. Negative Test: Division by zero
    test('should throw RangeError when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow(RangeError);
        expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
    });

    // 5. Negative Test: Non-number arguments 
    test('should throw TypeError when non-number types like boolean or undefined are passed', () => {
        expect(() => divide(true, 2)).toThrow(TypeError);
        expect(() => divide(6, undefined)).toThrow("Both arguments must be numbers");
    });
});