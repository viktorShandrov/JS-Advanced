function RoadRadar(speed,area){
const limitsOBJ = {
    "motorway":130,
    "interstate":90,
    "city":50,
    "residential":20,
}
const areaLimit = limitsOBJ[area]
const speeding = speed-areaLimit
let status = "none";
if(speeding>0){
    if(speeding<=20){
        status = "speeding"
    }else if(speeding<=40){
        status = "excessive speeding"
    }else{
        status = "reckless driving"
    }
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${areaLimit} - ${status}`);
}else{
    console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
}
}
RoadRadar(40, 'city')