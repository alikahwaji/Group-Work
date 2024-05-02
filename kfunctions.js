// An array of objects, make a new object relevant to the quantity
let bunches = ([
    { name: "currants", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 }
  ])

function kaydenSplitBunches(fruitArray){
    let result = []
    for(let i = 0; i<fruitArray.length; i++) {
        let amount = fruitArray[i].quantity
        let originalName = fruitArray[i].name
        for(let x = 0; x<amount; x++) {
            const fruit = {
                name: originalName,
                quantity: 1
            }
            result.push(fruit)
        }
    }
    return result
}

console.log(kaydenSplitBunches(bunches))

// nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19] n = 4
// nums = [ [4,14,12,7], [14,16,5,13], [7,16,11,19] ]
 
let nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]

function groupFromArray(array, groupsize) {
    let groupCount = Math.ceil(array.length/groupsize)
    
    for(let i = 0; i<groupsize; i++)
}

console.log(groupFromArray(nums, 4))