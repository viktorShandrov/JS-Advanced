function solve (){
class Balloon{
constructor (ballonColor, gasWeight) {
    this.color = ballonColor;
    this.gasWeight = gasWeight;
}
}
class PartyBalloon extends Balloon {
    constructor(ballonColor, gasWeight, ribbonColor, ribbonLength) {
        super(ballonColor, gasWeight)
        this._ribbon = {
            color: ribbonColor,
            length: ribbonLength,
        }
    }
        get ribbon()
        {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
    constructor (ballonCoLor, gosWeight, ribbonCoLor, ribbonLength, text) {
        super(ballonCoLor, gosWeight, ribbonCoLor, ribbonLength)
        this._text =text;
    }
        get text(){
            return this._text;
        }

    }
    return {
    Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}