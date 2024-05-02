// An array of objects, make a new object relevant to the quantity
let bunches = ([
    { name: "currants", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 }
  ]) //objects nested within an array

function kaydenSplitBunches(fruitArray){
    let result = []
    for(let i = 0; i<fruitArray.length; i++) { 
        let amount = fruitArray[i].quantity //retrieves quantity value of index of the array(each object)
        let originalName = fruitArray[i].name // 
        for(let x = 0; x<amount; x++) { // re prints 
            const fruit = {
                name: originalName,
                quantity: 1 // re prints each object as a quantity of One
            }
            result.push(fruit) // push the extra quantities
        }
    }
    return result
}

//console.log(kaydenSplitBunches(bunches))


// declare function 
function arrayNavigation(arr, num)=>{
    
}
// split numbers into n-sized groups
function arraySplit(arr){

}
// return a new array of all matching indexes eg// nums[0], nums[1], nums[2]
function matchIndexes(){

}
// add the elements of this array
function sumIndexes(){

}
// return the array with the greatest sum
function greatestSum(){
    greatestSum()
}
// if they have the same sum, return the one with the smallest element
function littleGuys(){

}