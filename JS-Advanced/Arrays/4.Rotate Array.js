function Rotate(array,rotations){
for (let index = 0; index < rotations; index++) {
    const element = array.pop()
    array.unshift(element) 
}
console.log(array.join(" "));
}
Rotate(['1', 
'2', 
'3', 
'4'], 
2
)