# Group-Work

Task-one:

You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.
splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]


Task-Two:

Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
