const calculator = require("./task3.js");


describe('My calculator',()=>{

    test("Should not be sum is a positive ",()=>{
        expect(calculator.add(2,-3)).toBeLessThan(0);
    })
    test("Should not be sum is a positive ",()=>{
        expect(calculator.add(null,null)).not.toBeNull;
    })
    test("Should not  be sum is a positive ",()=>{
        expect(calculator.add(undefined,undefined)).not.toBeUndefined;
    })

    test("Should not be sum is a positive ",()=>{
        expect(calculator.subtract(-2,-3)).not.toBeLessThan(0);
    })
    test("Should not be sum is a positive ",()=>{
        expect(calculator.subtract(null,null)).not.toBeNull;
    })
    test("Should not  be sum is a positive ",()=>{
        expect(calculator.subtract(undefined,undefined)).not.toBeUndefined;
    })
    test("Should not be sum is a positive ",()=>{
        expect(calculator.divide(2,-3)).toBeLessThan(0);
    })
    test("Should not be sum is a positive ",()=>{
        expect(calculator.divide(null,null)).not.toBeNull;
    })
    test("Should not  be sum is a positive ",()=>{
        expect(calculator.divide(undefined,undefined)).not.toBeUndefined;
    })
    test("Should not be sum is a positive ",()=>{
        expect(calculator.multiply(2,-3)).toBeLessThan(0);
    })
    test("Should not be sum is a positive ",()=>{
        expect(calculator.multiply(null,null)).not.toBeNull;
    })
    test("Should not  be sum is a positive ",()=>{
        expect(calculator.multiply(undefined,undefined)).not.toBeUndefined;
    })
    
})


