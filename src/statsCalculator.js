

    function statsCalculator(numbers) { 
        // Initialize variables to keep track of min, max, total, and count 
        let min = Number.MAX_SAFE_INTEGER; 
        let max = Number.MIN_SAFE_INTEGER; 
        let total = 0; 
        let count = 0; 
      
        // Iterate over the numbers in the sequence 
        for (let i = 0; i < numbers.length; i++) { 
          // Get the current number 
          const num = numbers[i]; 
      
          // Update the min and max values if necessary 
          if (num < min) min = num; 
          if (num > max) max = num; 
      
          // Add the number to the total 
          total += num; 
      
          // Increment the count of numbers 
          count++; 
        } 
      
        // Calculate the average 
        const average = total / count; 
      
        // Return an object with the min, max, average, and count 
        return { 
          min, 
          max, 
          average, 
          count, 
        }; 
      } 
      

//     let min = nums[0];
//     let max = nums[0];
//     let average = 0;
//     let elements = 0;
//     let sequence = '';

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] < min) {
//             min = nums[i];
//         }
//         if (nums[i] > max) {
//             max = nums[i];
//         }
//         average += nums[i];
//         elements++;
//         sequence += nums[i] + ',';

//     }
//     average = average / elements;
//     sequence = sequence.slice(0, -1);

//     return {
//         min: min,
//         max: max,
//         average: average,
//         sequence: sequence
//     }
// });

module.exports = statsCalculator;
