const capitalize = require('./task4.js')

test("first letter Capitalize in word",()=>{
    expect(capitalize('hello')).toBe('Hello')
})