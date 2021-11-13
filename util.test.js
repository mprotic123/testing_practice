const stringLength = require('./util.js');

test('should not be less than 1 and greater than 10',()=>{

  expect(stringLength("asdsd")).not.toBeLessThan(1);
  expect(stringLength("Sweet Drea")).not.toBeGreaterThan(10);

});



