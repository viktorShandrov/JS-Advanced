const {expect} = require("chai");
const PaymentPackage = require("12.payment.js")

describe("paymentFunc",function (){
        it("Can be instantiated  without anything",()=>{
            const payment = new PaymentPackage;
            expect(payment.name).to.equal("")
        })
        it("Can be instantiated  with string",()=>{
            const payment = new PaymentPackage("Ivan");
            expect(payment.name).to.equal("Ivan")
        })
}

);