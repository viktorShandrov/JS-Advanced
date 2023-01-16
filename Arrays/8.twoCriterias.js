function sort(array){
array.sort((a,b)=>{
    if(a.length-b.length===0){
        return a.toUpperCase().localeCompare(b.toLowerCase())
    }else{
        return a.length-b.length
    }
})
for (const iterator of array) {
    console.log(iterator);
}
}
sort(['test', 
'Deny', 
'omen', 
'Default']


)