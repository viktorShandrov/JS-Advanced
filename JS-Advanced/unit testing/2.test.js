const {expect} = require("chai");
const isOddOrEven = require("./2.evenOrOdd");

describe("unit test",function(){
    it("returns undefined when non-string is passed",()=>{
        expect(isOddOrEven()).to.equal(undefined)
    })
    it("returns even when even string is passed",()=>{
        expect(isOddOrEven("even")).to.equal("even")
    })
    it("returns odd whe odd string is passed",()=>{
        expect(isOddOrEven("odd")).to.equal("odd")
    })

    describe("overloading",function(){
        it("overload 1",()=>{
            expect(isOddOrEven("aaaa")).to.equal("even")
        })
        it("overload 2",()=>{
            expect(isOddOrEven("ssss")).to.equal("even")
        })
        it("overload 3",()=>{
            expect(isOddOrEven("dddd")).to.equal("even")
        })
        it("overload 4",()=>{
            expect(isOddOrEven("fff")).to.equal("odd")
        })
        it("overload 5",()=>{
            expect(isOddOrEven("fff")).to.equal("odd")
        })
        it("overload 6",()=>{
            expect(isOddOrEven("yyy")).to.equal("odd")
        })
        it("overload 7",()=>{
            expect(isOddOrEven("uuu")).to.equal("odd")
        })
    })
});