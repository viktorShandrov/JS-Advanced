function display(...args){
    

    let obj = {}

for (const arg of args) {
    const type = typeof arg
    if(!obj.hasOwnProperty(type)){
        obj[type] = 0
    }
    obj[type]++
    console.log(`${type}: ${arg}`);
}

obj = Object.entries(obj).sort((a,b)=>b[1]-a[1])

for (const KVP of obj) {
    console.log(`${KVP[0]} = ${KVP[1]}`);
}

}
display('cat', 42, function () { console.log('Hello world!'); },"cat")
