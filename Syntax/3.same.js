function areSame(numbers){
    const numsToString = numbers.toString()
const numbersArr = numsToString.split("") 
let areSame = true
let sum = 0
for (let index = 1; index < numbersArr.length; index++) {
    let element = numsToString[index];
    if(element!==numsToString[index-1]){
        areSame=false;
    }
}
console.log(areSame);
for (const x of numsToString) {
    let number = Number(x)
    sum+=number
}
console.log(sum);
}
areSame(2222222)