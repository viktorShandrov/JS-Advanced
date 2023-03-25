function toys(a){
let price=Number(a[0]);
let puzzels=Number(a[1]);
let dolls=Number(a[2]);
let bears=Number(a[3]);
let minions=Number(a[4]);
let trucks=Number(a[5]);
let sum=puzzels*2.6+dolls*3+bears*4.1+minions*8.2+trucks*2
let count=puzzels+dolls+bears+minions+trucks

if(count>=50){ 
    sum=sum*0.75  
}

sum=sum*0.9
let difference=sum-price
if(difference<0){
console.log(`Not enough money! ${difference.toFixed(2)*-1} lv needed.`)

}else{
console.log(`Yes! ${difference.toFixed(2)} lv left.`)

}

}
toys(["4003.8",
"20",
"25",
"30",
"50",
"10"])