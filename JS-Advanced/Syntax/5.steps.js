function stepsToUni(steps,footprintLength,speedKmH){
const pathDistanceInMeters = footprintLength*steps;
const speedInMetersPerSecond = speedKmH/3.6
const rest = Math.floor(pathDistanceInMeters/500)*60
const time = rest+pathDistanceInMeters/speedInMetersPerSecond
const hours = Math.floor(time/3600)
const minutes = Math.floor(time/60)
const seconds = Math.round(time%60)
console.log(`${hours<10?"0":""}${hours}:${minutes<10?"0":""}${minutes}:${seconds<10?"0":""}${seconds}`);
}
stepsToUni(4000, 0.60, 5)