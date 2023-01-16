function sort(array){
array.sort((a,b)=>a.localeCompare(b))
let i = 0;
for (const element of array) {
    i++
    console.log(`${i}.${element}`);
}


}
sort(["John", "Bob", "Christina", "Ema"])