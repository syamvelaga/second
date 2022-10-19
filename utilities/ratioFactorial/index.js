// const ratioOfTwoNumbers = require("../ratio/index");
// const factorialOfNumber = require("../factorial/index");

// const ratioAndFactorial = (num1, num2, num3) => {
//   const ratio = ratioOfTwoNumbers(num1, num2);
//   const factorial = factorialOfNumber(num3);

//   return { ratio, factorial };
// };

// module.exports = ratioAndFactorial;

const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial2 = factorialOfNumber(num3);
  return { ratio, factorial2 };
}

module.exports = ratioAndFactorial;
