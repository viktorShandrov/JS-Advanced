function price(arrayInput){
    productsObj = {}
for (const productInfo of arrayInput) {
    let [city,product,price]=productInfo.split(" | ")
    price = Number(price)
    if(productsObj.hasOwnProperty(product)){
        productsObj[product].push({city,price})
    }else{
        productsObj[product]=[{city,price}]
    }
}
for (let index = 0; index < Object.keys(productsObj).length; index++) {
    Object.entries(productsObj)[index][1].sort((a,b)=>a.price-b.price); 
}
//let sortedObj = Object.fromEntries(productsObj).sort(())
for (const kvp of Object.entries(productsObj)) {
    console.log(`${kvp[0]} -> ${kvp[1][0].price} (${kvp[1][0].city})`);
}
//console.log(productsObj["Orange"][0].price);

}
price(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)