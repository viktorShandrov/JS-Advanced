function juiceMaker(juices){
    const juicesObj = {};
    const bottles = {};
    for (const juiceLine of juices) {
        const [juice,quantity] = juiceLine.split(" => ")
        if(juicesObj.hasOwnProperty(juice)){
            juicesObj[juice]+=Number(quantity)
        }else{
            juicesObj[juice]=Number(quantity);
        }
        while(juicesObj[juice]>=1000){
            if(!bottles.hasOwnProperty(juice)){
                bottles[juice]=0;
            }
            juicesObj[juice]=juicesObj[juice]-1000;
            bottles[juice]+=1;
        }
    }



    for (const juiceElement of Object.entries(bottles)) {
        if(juiceElement[1]!==0){
            console.log(`${juiceElement[0]} => ${juiceElement[1]}`)
        }
    }




}
juiceMaker(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);