// An array of objects, make a new object relevant to the quantity
let bunches = ([
    { name: "currants", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 }
  ])

function splitBunches(fruitArray){
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

console.log(splitBunches(bunches))
function splitBunches(arr){

}


let fruitArray= [ 
        { name: "currants", quantity: 1 },
        { name: "grapes", quantity: 2 },
        { name: "bananas", quantity: 2 }
]
// https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
