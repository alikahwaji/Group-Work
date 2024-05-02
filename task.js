// let fruit = [ { name: "currants", quantity: 1 },
//                 { name: "grapes", quantity: 2 },
//                 { name: "bananas", quantity: 2 } ];

// function spit (fruit){
//     fruit.array.forEach(element => {
    
//     });
    

// };
// spit()                       fail code

// task 2
//Given an array of numbers and a value for n, split the numbers into n-sized groups. 
//If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum.
// If two or more columns have the same sum, return the one with the smallest column number.

let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
 const n = 4

// nums = [
// [4,14,12,7],
// [14,16,5,13],
// [7,16,11,19]
// ]
function maxColumnSum(nums, n) {
    // Step 1: Split the input array into groups of size n
    const groups = [];
    for (let i = 0; i < nums.length; i += n) {
      groups.push(nums.slice(i, i + n));
    } console.log(groups)
}
console.log(maxColumnSum)

