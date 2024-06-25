// Which variable can't I use to store x in this Example?
/*(let-var-const) write here : ....
x = 5;
x = 7;*/

console.log("Answer : const => because it's can't changeable it's value "); 


/* In This Example You should write instead of dots 
the name of this data type. */
/*
let   M  = 1         ;    //...
const i  = "1";       ;    //...
var   c  = true      ;    //...
let   r  = null      ;    //...
const o  = NaN       ;    //...
const t  = undefined ;    //...
var   s  = {
    track:"Frontend";
}         ;    //...
let   of =   ["HTML","CSS","JS",3] ; //...*/


console.log(`let   M  = 1         ;    // number
const i  = "1"       ;    // string
var   c  = true      ;    // boolean
let   r  = null      ;    // null
const o  = NaN       ;    // number (NaN is a type of number)
const t  = undefined ;    // undefined
var   s  = {
                track:"Frontend"
           }         ;    // object
let   of =   ["HTML","CSS","JS",3] ; // object (arrays are a type of object)
    `)

    /*// Here's some sentences that I want to print in the console in the same shape
console.log("It takes a great deal of bravery to stand up to our enemies,"
+"but just as much to stand up to our friends.");

/*
Result in console : ...
    It takes a great deal of bravery to stand up to our enemies,
    but just as much to stand up to our friends.
*/
console.log(`It takes a great deal of bravery to stand up to our enemies,
but just as much to stand up to our friends.`);

// or
console.log("It takes a great deal of bravery to stand up to our enemies,\n"
+"but just as much to stand up to our friends.");


//#############################################################################

//*here two ways to get the result , I need you to write these two ways
// console.log("After all this time? Always.");

/*
Result in console : ...
    After all this time?
    "Always".
*/

// 1 
console.log("After all this time? \n\"Always\".");
//2
console.log('After all this time? \n"Always".');
//3
console.log(`After all this time? 
"Always".`);


//#############################################################################

//*here two ways to get the result , I need you to write these two ways
// console.log('Fear of a name only increases fear of the thing itself.');

/*
Result in console : ...
    Fear of a 'name' only increases fear of the thing itself.
*/

// 1 
console.log("Fear of a 'name' only increases fear of the thing itself.");
//2
console.log('Fear of a \'name\' only increases fear of the thing itself.');
