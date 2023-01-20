function carFactory({model,power,color,carriage,wheelsize}){
    

    let engine = {} 
    const enginesList = {
        small:{ power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }
if(power<=90){
    engine=enginesList.small
}else if(power<=120){
    engine=enginesList.normal
}else{
    engine=enginesList.monster
}

if(wheelsize%2===0){
    wheelsize--
}

const wheels = [wheelsize,wheelsize,wheelsize,wheelsize]

const resultCar = {
    model,
    engine,
    carriage:{color,type:carriage},
    wheels,
}
return resultCar;
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)