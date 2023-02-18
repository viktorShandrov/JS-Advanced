class WineSelection{
    constructor(space){
        this.space = space
        this.wines =[]
        this.bill = 0
    }

    reserveABottle(wineName,wineType,price){
        if(this.space<=0){
            throw  new Error("Not enough space in the cellar.")
        }else{
            this.space--
            this.wines.push({wineName,wineType,price,paid:false})
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }

    openBottle(wineName) {
        const wine = this.wines.find((a)=>a.wineName===wineName)
        
        if(!wine){
            throw new Error(`The wine, you're looking for, is not found.`)
        }else if(!wine.paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }else{
            const indexof = this.wines.indexOf(wine)
            this.space++
            this.wines.splice(indexof,1)
            return `You drank a bottle of ${wineName}.`
        }
    }

    payWineBottle( wineName, price ){
       const wine = this.wines.find((a)=>a.wineName===wineName)
       if(wine===undefined)  {
           throw new Error(`${wineName} is not in the cellar.`)
        }else if(wine.paid===true){
            throw new Error(`${wineName} has already been paid.`)
        }else{
            this.bill+=price
            wine.paid=true
            //console.log(wine);
        return `You bought a ${wineName} for a ${price}$.`
      }
    }

    cellarRevision(wineType){
        const wine = this.wines.find((a)=>a.wineType===wineType)
        if(wineType === undefined){
           let message = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\m`
           
           this.wines.sort((a,b)=>a.wineName.localeCompare(b.wineName))
           for (const wine of this.wines) {
            if(wine.paid){
                let isPaid = "Has Paid"
                message+=`\n${wine.wineName} > ${wine.wineType} - ${isPaid}.`
            
            }else{
                let isPaid = "Not Paid"
                message+=`\n${wine.wineName} > ${wine.wineType} - ${isPaid}.`
                
            }
        }
        return message
        }else{
            const wine = this.wines.find((a)=>a.wineType===wineType)
            if(wine.paid){
                let message = "Has Paid"
                if(wine){
                    return (`${wine.wineName} > ${wine.wineType} - ${message}.`);
                }else{
                    throw new Error(`There is no ${wineType} in the cellar.`)
                }
            }else{
                let message = "Not Paid"
                if(wine){
                    return (`${wine.wineName} > ${wine.wineType} - ${message}.`);
                }else{
                    throw new Error(`There is no ${wineType} in the cellar.`)
                }
            }
            
            
        }
    }
}

let selection = new WineSelection(5);

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);





