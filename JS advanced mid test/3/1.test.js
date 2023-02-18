

const {expect} = require("chai");
const init = require("./1") ;

describe("test", function() {
    describe("isGoodLocation",()=>{
        it("return This location is not suitable for you.",()=>{

            expect(findNewApartment.isGoodLocation("pazar",true)).to.equal("This location is not suitable for you.")
        })
        it("returns There is no public transport in area. i second is false",()=>{
            expect(findNewApartment.isGoodLocation("Sofia",false)).to.equal("There is no public transport in area.")
        })
        it("returns You can go on home tour! when is right",()=>{
            expect(findNewApartment.isGoodLocation("Sofia",true)).to.equal("You can go on home tour!")

        })
        it("returns Invalid input!.",()=>{
            expect(()=>findNewApartment.isGoodLocation(12,1)).to.throw()
        })
        it("returns Invalid input!.",()=>{
            expect(()=>findNewApartment.isGoodLocation("Sofia",1)).to.throw()
        })
        it("returns Invalid input!.",()=>{
            expect(()=>findNewApartment.isGoodLocation(1,true)).to.throw()
        })
    })

    describe("test", function() {
        it("throws",()=>{
            expect(()=>findNewApartment.isLargeEnough (1,1)).to.throw()
        })
        it("throws",()=>{
            expect(()=>findNewApartment.isLargeEnough ([],1)).to.throw()
        })
        it("throws",()=>{
            expect(()=>findNewApartment.isLargeEnough ([1],"1")).to.throw()
        })
        it("throws",()=>{
            expect(findNewApartment.isLargeEnough ([40],1)).to.equal("40")
        })
    })


    describe("test", function() {
        it("throws",()=>{
            expect(findNewApartment.isItAffordable (100,10)).to.equal("You don't have enough money for this house!")
        })
        it("throws",()=>{
            expect(findNewApartment.isItAffordable (10,100)).to.equal("You can afford this home!")
        })


        it("throws",()=>{
            expect(()=>findNewApartment.isItAffordable ("1",100)).to.throw()
        })
        it("throws",()=>{

            expect(()=>findNewApartment.isItAffordable (10,"1")).to.throw()
        })
        it("throws",()=>{

            expect(()=>findNewApartment.isItAffordable ("1","100")).to.throw()
        })
        it("throws",()=>{
            expect(()=>findNewApartment.isItAffordable (0,111)).to.throw()
        })
        it("throws",()=>{

            expect(()=>findNewApartment.isItAffordable (111,0)).to.throw()

        })
        it("throws",()=>{

            expect(()=>findNewApartment.isItAffordable (-1,1)).to.throw()
        })
        it("throws",()=>{

            expect(()=>findNewApartment.isItAffordable (1,-1)).to.throw()
        })
        it("throws",()=>{

            expect(()=>findNewApartment.isItAffordable (-1,-1)).to.throw()
        })


    })










});
