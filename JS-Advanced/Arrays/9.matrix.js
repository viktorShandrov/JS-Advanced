function matric(matrixArr) {
    const resultsArr = []
for (const row of matrixArr) {
    resultsArr.push(row.reduce((current,total)=> total+current))
}

let matricArrsLength = matrixArr[0].length

for(let column = 0 ; column<matricArrsLength; column++){
    let totalPerColumn = 0;
    for(let row = 0;row<matricArrsLength;row++){
  let currentElement = matrixArr[row][column]
  totalPerColumn+=currentElement
}
resultsArr.push(totalPerColumn)
}

console.log(resultsArr.every((value,i,arr)=>value===resultsArr[0]));
}
matric([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)