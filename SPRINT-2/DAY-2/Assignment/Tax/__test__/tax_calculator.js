const tax = require("./tax_calculator")

//{test, expect} = require("@jest/globals")

const{test, expect} =  require("@jest/globals")

describe("tax", function(){

    test("for less than 2,50,000", function ()
    {
        expect(tax(10000)).toBe("no tax")
       
    })

    test("for 2,50,000 to 500000", function ()
    {
        expect(tax(300000)).toBe(30000)
       
    })

    test("for greater than 1000000", function ()
    {
        expect(tax(1000001)).toBe(3000001)
       
    })
    test("for 1000000", function ()
    {
        expect(tax(1000000)).toBe(200000)
       
    })
    test("for 500000", function ()
    {
        expect(tax(500000)).toBe(50000)
       
    })

    test("for 250000", function ()
    {
        expect(tax(250000)).toBe("no tax")
       
    })

    test("for 2,50,000 to 10,00,000", function ()
    {
        expect(tax(750000)).toBe("150000")
       
    })
    
    test("for string", function ()
    {
        expect(tax("1200")).toBe("enter number")
       
    })
    
    test("for string", function ()
    {
        expect(tax(" ")).toBe("enter number")
       
    })




})