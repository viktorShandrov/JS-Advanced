function solution(params) {

    const recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const availableElements = {}

    function manager(params) {

        const [operation, ...args] = params.split(" ")

        let operationsList = {
            restock,
            prepare,
            report,
        }


        function restock(args) {
            if (!availableElements.hasOwnProperty(args[0])) {
                availableElements[args[0]] = 0;
            }
            availableElements[args[0]] += Number(args[1]);
            return `Success`;
        }

        function prepare(args) {
            isError = false;
            problemElement = "";
            const elementsForSubstract = [];
            for (const kvp of Object.entries(recipies[args[0]])) {
                const requiredElement = kvp[0];
                const requiredAmount = Number(args[1])*Number(kvp[1]);
                if (!(availableElements[requiredElement] >= requiredAmount)) {
                    isError = true;
                    problemElement = requiredElement;
                    break;
                } else {
                    elementsForSubstract.push(requiredElement);
                }
            }
            if (isError) {
                return `Error: not enough ${problemElement} in stock`;
            } else {
                //the recipe is done and we have to substarct the required materials
                for (const requiredElement of elementsForSubstract) {
                    availableElements[requiredElement] -= Number(args[1])*Number(recipies[args[0]][requiredElement]);
                }
                return `Success`;
            }

        }
        function report(args) {
            
            return `protein=${!availableElements.hasOwnProperty("protein") ? "0" : availableElements.protein} carbohydrate=${!availableElements.hasOwnProperty("carbohydrate") ? "0" : availableElements.carbohydrate} fat=${!availableElements.hasOwnProperty("fat") ? "0" : availableElements.fat} flavour=${!availableElements.hasOwnProperty("flavour") ? "0" : availableElements.flavour}`

        }

        return operationsList[operation](args)
    }
    return manager
}
let result = solution()
console.log(result(`prepare turkey 1`));
console.log(result('restock protein 10'));
console.log(result('prepare turkey 1'));
console.log(result('restock carbohydrate 10'));
console.log(result('prepare turkey 1'));
console.log(result('restock fat 10'));
console.log(result('prepare turkey 1'));
console.log(result('restock flavour 10'));
console.log(result('prepare turkey 1'));
console.log(result('report'));