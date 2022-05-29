const time = require("./time")

const {test, expect} = require("@jest/globals")

describe("test sum with",function () {
    test("it should for hr", function ()
    {
        expect(time(18000000)).toBe("5 hours 0 minute 0 second")
    })

    test("it should for hr=0", function ()
    {
        expect(time(60000)).toBe("0 hour 1 minute 0 second")
    })

    test("it should for hr=0", function ()
    {
        expect(time(5000)).toBe("0 hour 0 minute 5 seconds")
    })

    test("it should for hr=0", function ()
    {
        expect(time(5420000)).toBe("1 hour 30 minutes 20 seconds")
    })
})
