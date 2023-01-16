function Extract(array){
const resultArr = []
let biggestNum = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element>biggestNum||element===biggestNum){
        biggestNum = element
        resultArr.push(biggestNum)
    }
}
return resultArr.sort((a,b)=>a-b);

}
Extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )