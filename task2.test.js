const reverseString = require('./task2.js');
 
test('shoud not be number',()=>{
  expect(reverseString("atilla")).toEqual(expect.any(String));
  expect(reverseString(1)).toBeNull();
})
