function cooking(number,...operations){
let numberNum = Number(number)
const operationListOBJ={
    "chop":`numberNum/2`,
    "dice":`Math.sqrt(numberNum)`,
    "spice":`numberNum+1`,
    "bake":`numberNum*3`,
    "fillet":`numberNum*0.80`,
}
for (const operation of operations) {
    numberNum = eval(operationListOBJ[operation])
    console.log(numberNum);
}
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')