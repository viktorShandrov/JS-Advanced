function calorie(input){
    let resultObj = {}
for (let index = 0; index < input.length; index+=2) {
    resultObj[input[index]]=Number(input[index+1]);
}
console.log(resultObj);
}
calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])