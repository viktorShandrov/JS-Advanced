function sort(array){
let smallest = array[0];
let biggest = array[0];
const resultARR = []

while(array.length>0){

    smallest=array[0]
    biggest=array[0]

for (let index = 0; index < array.length; index++) {

    const element = array[index];
    if(element>biggest){
        biggest = element
    }else if(element<smallest){
        smallest = element
    }
}

resultARR.push(smallest,biggest)

let indexOfSmallest = array.indexOf(smallest)
array.splice(indexOfSmallest,1)
while(array.includes(smallest)){
    array.splice(indexOfSmallest,1)
}

let indexOfBiggest = array.indexOf(biggest)
array.splice(indexOfBiggest,1)
while(array.includes(biggest)){
    array.splice(indexOfBiggest,1)
}
}

return resultARR;

}
sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])