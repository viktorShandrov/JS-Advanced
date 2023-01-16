function addAndRemove(array){
    const result = [];
    let currentResult = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element==="add"){
        currentResult+=1
        result.push(currentResult)
    }else{
        result.pop()
        currentResult+=1
    }
}
if(result.length!==0){
for (const x of result) {
    console.log(x);
}
}else{
    console.log("Empty");
}
}
addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']


)