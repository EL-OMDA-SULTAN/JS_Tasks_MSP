// 1- Task 1
const myArray = ['item1', 'item2', 'item3'];
console.log(myArray);   // print the array as array object
for (let i = 0; i < myArray.length; i++) { // loop through the array
    console.log(myArray[i]);
}

// 2- Task 2

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// or  sum=numbers.reduce((a, b) => a + b);
// or sum=(numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]);
console.log("Sum : " + sum);

// 3- Task 3

const items=["Pen","Book","Phone","Computer"];
const searchItem="Book"; 
if(items.includes(searchItem)){   // conditional statement to check if the item is in the array
    console.log("It's Founded : " + searchItem);
}else{
    console.log("Not Found : " + searchItem);
}
// 1 - or console.log(items.includes(searchItem) ? "It's Founded : " + searchItem : "Not Found : " + searchItem);
// 2 - or console.log(items.indexOf(searchItem) !== -1 ? "It's Founded : " + searchItem : "Not Found : " + searchItem);
// 3 - or let found = false;
// for (let i = 0; i < items.length; i++) {
//     if(items[i]===searchItem){
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log("It's Founded : " + searchItem);
// }else{
//     console.log("Not Found : " + searchItem);
// }

// 4- Task 4

const fruits=["Apple","Orange","Mango"];
fruits.push("Banana");   // add new element to the end of the array
fruits.unshift("Watermelon");  // add new element to the start of the array
console.log(fruits);


// 5- Task 5

const colors=["Red","Green","Blue","purple"];
colors.pop(); // delete last element
colors.shift();  // delete first element
console.log(colors);

// 6- Task 6

const numbers2=[10,25,12,7,38];
let min=numbers2[0];
let max=numbers2[0];
for(let i=0;i<numbers2.length;i++){
    if(numbers2[i]<min){
        min=numbers2[i];
    }
    if(numbers2[i]>max){
        max=numbers2[i];
    }
}

console.log("Min Number : " + min);
console.log("Max Number : " + max);

// or console.log(Math.max.apply(null,numbers2));
// or console.log(Math.min.apply(null,numbers2));


// 7- Task 7

const numbers3=[10,20,30,40,50];
let sum2=0;
for(let i=0;i<numbers3.length;i++){
    sum2+=numbers3[i];
}
console.log("Average : " + sum2/numbers3.length); // average = the sum / the number of elements

// or console.log("Average : " + numbers3.reduce((a, b) => a + b) / numbers3.length);


// 8- Task 8

const numbers4=[1,2,3,4,5];
let evenNumbers=[];
evenNumbers=evenNumbers.concat(numbers4);
console.log(evenNumbers);

// it's for even numbers 
//const evenNumbers = numbers4.filter(num => num % 2 === 0);
// for(let i=0;i<numbers4.length;i++){
//     if(numbers4[i]%2===0){
//         evenNumbers.push(numbers4[i]);
//     }
// }