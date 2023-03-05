const {expect} = require("chai");
const mathEnforcer = require("./4.math");

describe("mathEnforcer",()=>{
    
    describe("add",()=>{
        it("returns undefined if param is not number",()=>{
            expect(mathEnforcer.addFive("a")).to.equal(undefined)
        })
        it("returns true result",()=>{
            expect(mathEnforcer.addFive(0)).to.equal(5)
        })
        it("returns undefined if no param",()=>{
            expect(mathEnforcer.addFive()).to.equal(undefined)
        })
        it("reeturns 5.1 ",()=>{
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1,0.01)
        })
        it("returns true result with negative params ",()=>{
            expect(mathEnforcer.addFive(-1)).to.be.equal(4)
        })
    })

    describe("subtract",()=>{
        it("returns undefined if param is not number",()=>{
            expect(mathEnforcer.subtractTen("a")).to.equal(undefined)
        })
        it("returns true result",()=>{
            expect(mathEnforcer.subtractTen(0)).to.equal(-10)
        })
        it("returns undefined if no param",()=>{
            expect(mathEnforcer.subtractTen()).to.equal(undefined)
        })
        it("reeturns 0.1 ",()=>{
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1,0.01)
        })
        it("returns true result with negative params ",()=>{
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11)
        })
    })

    describe("sum",()=>{
        it("returns undefined if first param is not number",()=>{
            expect(mathEnforcer.sum("a",1)).to.equal(undefined)
        })
        it("returns undefined if second param is not number",()=>{
            expect(mathEnforcer.sum(1,"a")).to.equal(undefined)
        })
        it("returns true result",()=>{
            expect(mathEnforcer.sum(1,2)).to.equal(3)
        })
        it("returns undefined if no param",()=>{
            expect(mathEnforcer.sum()).to.equal(undefined)
        })
        it("reeturns 0.3 from 0.1 and 0.2",()=>{
            expect(mathEnforcer.sum(0.1,0.2)).to.be.closeTo(0.3,0.01)
        })
        it("returns true result with negative params ",()=>{
            expect(mathEnforcer.sum(-1,-2)).to.be.equal(-3)
        })

    })
})