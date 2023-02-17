function carMaker(carsInput){
    const brandsObj = {};
    for (const carLine of carsInput) {
        const [brand,model,quantity] = carLine.split(" | ");
        if(brandsObj.hasOwnProperty(brand)){

            let isFound = false;
            for (const car of brandsObj[brand]) {
                if (car.model===model){
                    isFound = true;
                    brandsObj[brand][brandsObj[brand].indexOf(car)]["quantity"]+=Number(quantity);
                }
            }
            if (!isFound){
                brandsObj[brand].push({model, quantity: Number(quantity)})
            }



        }else{
            brandsObj[brand] = [{model,quantity:Number(quantity)}];
        }
    }

    for (const brand of Object.entries(brandsObj)) {
        console.log(`${brand[0]}`)
        for (const car of brand[1]) {
            console.log(`###${car.model} -> ${car.quantity}`)
        }
    }



}
carMaker(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);