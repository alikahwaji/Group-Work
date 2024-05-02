
let arr = 
[  
{ name: "currants", quantity: 1 }, 
{ name: "grapes", quantity: 2 },
{ name: "bananas", quantity: 2 } 
];

// [
// { name: "currants", quantity: 1}, 
// { name: "grapes", quantity: 1 }, 
// { name: "grapes", quantity: 1 },
// { name: "bananas", quantity: 1 }, 
// { name: "bananas", quantity: 1 }
// ]

const result = [];
arr.forEach((fruit) => {
  for (let i = 0; i < fruit.quantity; i++) {
    result.push({ name: fruit.name, quantity: 1 });
  }
});

console.log(result);

const nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], n = 4;
for (let i = 0; i < nums.length; i += n) {
    const chunk = nums.slice(i, i + n);
    console.log(chunk);
}