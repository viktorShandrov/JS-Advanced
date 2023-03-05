const { expect } = require("chai");
const lookupChar = require("./3.char");

describe("lookupChar",()=>{
    it("returns undefined when first parameter NOT a string",()=>{
        expect(lookupChar(1,1)).to.equal(undefined);
    })
    it("return undefined if the second parameter is NOT a number",()=>{
        expect(lookupChar("a","a")).to.equal(undefined);
    })
    it("return undefined if the second parameter is NOT integer",()=>{
        expect(lookupChar("aaaa",1.5)).to.equal(undefined);
    })
    it("return Incorrect index if the second parameter is negative",()=>{
        expect(lookupChar("aaaa",-1)).to.equal("Incorrect index");
    })
    it("return Incorrect index if the second parameter grather that arr length",()=>{
        expect(lookupChar("aaaa",10)).to.equal("Incorrect index");
    })
    it("returns the corrent char",()=>{
        expect(lookupChar("string",2)).to.equal("r");
    })
    
})