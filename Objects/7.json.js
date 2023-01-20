function table(tableInput){
class CityTable{
    constructor(Town,Latitude,Longitude){
        this.Town = Town,
        this.Latitude = Number(Latitude),
        this.Longitude = Number(Longitude)
    }
}
const resultArr=[]
for (let i =1; i<tableInput.length;i++) {
    let[empty,Town,Latitude,Longitude,empty2] = tableInput[i].split(/\s*\|\s*/g)
    Latitude = Number(Latitude).toFixed(2)
    Longitude = Number(Longitude).toFixed(2)
    
    let obj = new CityTable(Town,Latitude,Longitude)
    resultArr.push(obj)
}

let stringed = JSON.stringify(resultArr)
console.log(stringed);
}
table(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)