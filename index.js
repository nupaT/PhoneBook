const os = require('os');
let res = os.platform();
console.log(res);

const my_math = require('./my_math');
let res1 = my_math.add(3, 4);
let res2 = my_math.minus(3, 4);
console.log(`res1: ${res1}`);
console.log(`res2: ${res2}`);
