const nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
const size = 4

function sum(arr,s){
    const chunks = []
    const sums = []
    const chunkAmount = arr.length/s
    let temp = 0
    for(let i = 0; i < chunkAmount; i++){
        chunks.push(arr.slice(s * i, s + s * i))
    }
    for(let j = 0; j < chunkAmount; j++){
        temp = 0
        for(let k = 0; k < chunkAmount; k++){
            temp = temp + chunks[k][j]
        }
        sums.push(temp)
    }
    let highestSum = Math.max(...sums)
    return highestSum
}

console.log(sum(nums,size))