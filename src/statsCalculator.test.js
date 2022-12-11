const statsCalculator = require('./statsCalculator');

describe('statsCalculator', () => {

        it('calculates the min, max, average, and count for a sequence of numbers', () => { 
          // Defines a sequence of numbers
          const numbers = [1, 3, 5, 7, 9]; 
      
          // Call the function being tested with the sequence 
          const result = statsCalculator(numbers); 
      
          // Assert that the function returns the expected values 
          expect(result.min).toBe(1); 
          expect(result.max).toBe(9); 
          expect(result.average).toBe(5); 
          expect(result.count).toBe(5); 
        }); 



    });
    