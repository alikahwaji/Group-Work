//array to be split
const bunches = [ { name: "currants", quantity: 1 }, { name: "grapes", quantity: 2 }, { name: "bananas", quantity: 2 } ]

//function takes an array
function splitBunches(arr){
    //makes a empty array
    const split = []
    //checks every object in the input array
    arr.forEach(arr =>{
        //does a loop for each quantity the object has
        for(let i = 0; i < arr.quantity; i++){
            //for every quantity pushes a copy of object with quantity to new array
            split.push({name: arr.name, quantity: 1})
        }
    })
    //returns the new array
    return split
}

//prints the result
console.log(splitBunches(bunches))