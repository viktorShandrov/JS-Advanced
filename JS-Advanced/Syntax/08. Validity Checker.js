function ValidityChecker(x1,y1,x2,y2){
const distance = Math.sqrt((x2-x1)**2+(y2-y1)**2)
if(Number.isInteger(distance)){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
}else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
}
ValidityChecker(3, 0, 0, 4)