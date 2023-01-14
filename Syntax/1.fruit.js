function fruit(fruit,weightGrams,pricePerKilo){
const weightKilo = weightGrams/1000;
const money = pricePerKilo*weightKilo;

console.log(`I need $${money.toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)