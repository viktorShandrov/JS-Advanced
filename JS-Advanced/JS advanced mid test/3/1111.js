

const {expect} = require("chai");
const init = require("./1") ;

describe("test", function() {
    describe("isGoodLocation",()=>{
        it("return This location is not suitable for you.",()=>{

            expect(init.isGoodLocation("pazar",true)).to.equal("This location is not suitable for you.")
        })
    })

    })











