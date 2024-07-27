// task 1
function greet(name){
    console.log("Hello ,"+name);
}
let name=window.prompt("Enter your name : ");
greet(name);

// task 2
let fNumber=20;
let sNumber=30;

function max(a,b){
    return "Max Number : "+Math.max(a,b);
}
console.log(max(fNumber,sNumber));


// task 3
let str="ABCDEF";
function reverse(str){
    let str2="";
    for(let i=str.length-1;i>=0;i--){
        str2+=str[i];
    }
    return str2;
    // return str.split("").reverse().join(""); // or 
}
console.log(reverse(str));


// task 4
let num=20;
function primeFactors(num){
    let arr=[];
    for(let i=2;i<=num;i++){
        while(num%i==0){
            arr.push(i);
            num=num/i;
        }
    }
    return arr;
}
console.log(primeFactors(num));


// task 5

let email="elomda@gmail.com";

function validateEmail(email){
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
}
console.log(validateEmail(email));

// task 6

let factorial= (number)=>{
    let fact=1;
    for(let i=1;i<=number;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));


// task 7

let rectangleArea= (width,height)=>{
    return width*height;
}
console.log(rectangleArea(10,20));