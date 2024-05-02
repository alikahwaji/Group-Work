// let output=[]
// function splitBunches(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         // for (let j = arr[i].quantity; j > 0; j--) {
//         //     output.push
//         (arr[i-1].name)
       
// // }
// }
// console.log(arr)
// return output
// }

// console.log(splitBunches([{name: "currants", quantity: 1}, {name: "grapes", quantity: 2}, {name: "Bananas", quantity: 2}]))
let output2 = []
const numSort = (arr, n) => {
    let j = 0
    while(arr.length > 0){
        output2.push([])
    for (let i = 0; i < n && arr.length > 0; i++) {    
        output2[j].push(arr.shift())
    }
    j++
}
for (let k = 0; k < n; k++) {
    for (let l = 0; l < arr.length; l++){
    // working on logic

}
return output2
}}
console.log(numSort([4, 15, 15, 14, 12, 25, 24, 14, 5, 3, 6, 18], 4))