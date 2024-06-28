//1. Replace (?) from the Arithmetic Operators to get the result, Output = zero

console.log(10 + 20 * 3 + 30 * 5 + 30 - 250);

/*
2. Checkout Order Details – Arithmetic:
• Create 3 variables to store an item price. The last item price
multiply by 2.
• Tell the user what the total price is before discount.
• Inform them the final price after saving 5 dollars with promo
code: "MSP".
*/

let item1 = 30;
let item2 = 35;
let item3 = 20*2;

let total = item1 + item2 + item3;
console.log("The total price is : " + total);
console.log("The final price is : " + (total - 5) + " with promo code 'MSP'" );

/* 
3. Create two variables named Number One and Number Two using the
correct method and standards for naming variables. The first variable
has a value of 20, and the second variable has a value of 24.
*/

let numberOne = 20;
let numberTwo = 24;

console.log("Normal concatenate: " + numberOne + numberTwo);
console.log("Normal concatenate: " + typeof(numberOne +''+ numberTwo));

console.log("template literal: "+`${numberOne}${numberTwo}`);
console.log(`template literal: ${typeof`${numberOne} ${numberTwo}`}`);

console.log("Normal concatenate: \n" + numberTwo +"\n"+numberOne );
console.log(`template literal: 
${numberTwo} 
${numberOne}`);

