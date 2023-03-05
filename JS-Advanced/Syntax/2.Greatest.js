function greater(number1,number2){
    let commonNumber = 0
for (let i = 1000; i>0; i--) {
    if(number1%i===0&&number2%i===0){
        commonNumber = i
        break;
    }
}
console.log(commonNumber);
}
greater(15, 5)