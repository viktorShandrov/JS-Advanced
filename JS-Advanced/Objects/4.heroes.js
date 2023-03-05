function heroes(input){
let allHeroesArr = []
for (const array of input) {
    let [name,level,items] = array.split(" / ")
    items?items = items.split(", "):items = []
     
    level = Number(level)
    allHeroesArr.push({name,level,items})
}
let stringified = JSON.stringify(allHeroesArr)
//console.log(stringified);
return stringified; 
}
heroes(['Isacc / 25 / Apple',
'Derek / 12 / ',
'Hes / 1 / Desolator, Sentinel, Antara']
)