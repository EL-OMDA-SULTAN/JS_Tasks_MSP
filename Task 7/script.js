// task 1 -- create a function to find the length of an array without using the length

let arr = [1, 2, 3, 4, 5];
function findLength(arr) {
    let len = 0;
    while (arr[len] !== undefined) {
        len++;
    }
    return len;
}

console.log('the length is ' + findLength(arr));

// another way to do it
let  arr2= [1, 2, 3, 4, 5];
function findLength2(arr2) {
    let len = 0;
    for (const item of arr2) {
        len++;
    }
    return len;
}

console.log('the length is ' + findLength2(arr2));


// task 2 -- write a function to check if an element exists in an array

let arr3 = [1, 2, 3, 4, 5];
function checkElement(arr3, element) {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === element) {
            return 'element found';
        }
    }   
    return 'element not found';
}

console.log(checkElement(arr3, 3));

// task 3 -- create a function to map an array of numbers to their squares

let arr4 = [1, 2, 3, 4, 5];
function squareArray(arr4) {
    let result = [];
    for (let i = 0; i < arr4.length; i++) {
        result.push(arr4[i] * arr4[i]);
    }
    return result;
}

console.log('the result of square is ' + squareArray(arr4));

// task 4 -- construct a function to find the maximum and minimum values in an array

let arr5 = [1, 2, 3, 4, 5];
function findMinMax(arr5) {
    let min = arr5[0];
    let max = arr5[0];
    for (let i = 1; i < arr5.length; i++) {
        if (arr5[i] < min) {
            min = arr5[i];
        }
        if (arr5[i] > max) {
            max = arr5[i];
        }
    }
    return ['the min value is ' + min, 'the max value is ' + max];
}

console.log(findMinMax(arr5));

// task 5 -- write a function to find the sum of all elements in an array

let arr6 = [1, 2, 3, 4, 5];
function sumArray(arr6) {
    let sum = 0;
    for (let i = 0; i < arr6.length; i++) {
        sum += arr6[i];
    }
    return sum;
}

console.log('the sum is ' + sumArray(arr6));

// task 6 -- create a function to find the average of an array elements 

let arr7 = [1, 2, 3, 4, 5];
function averageArray(arr7) {
    let sum = 0;
    for (let i = 0; i < arr7.length; i++) {
        sum += arr7[i];
    }
    return sum / arr7.length;
}

console.log('the average is ' + averageArray(arr7));

// task 7 -- develop a function to concatenate two arrays

let arr8 = [1, 2, 3, 4, 5];
let arr9 = [6, 7, 8, 9, 10];
function concatArray(arr8, arr9) {
    return arr8.concat(arr9);
}

console.log('the concatenated array is ' , concatArray(arr8, arr9));

// task 8 -- construct a function to find the intersection of two arrays

let arr10 = [1, 2, 3, 4, 5];
let arr11 = [6, 7, 3, 4, 10];
function intersectionArray(arr10, arr11) {
    let result = [];
    for (let i = 0; i < arr10.length; i++) {
        if (arr11.includes(arr10[i])) {
            result.push(arr10[i]);
        }
    }
    return result;
}

console.log('the intersection array is ' , intersectionArray(arr10, arr11));
