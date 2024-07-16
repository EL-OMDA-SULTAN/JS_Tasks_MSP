
//  لديك المتغير التالي والمطلوب 
//  Numberفي السطر الأول نريد طباعة الرقم 100 فقط من المتغير والتأكد من أن نوعه هو 
// Numberفي السطر الثاني نريد طباعة الرقم 100.57 فقط من المتغير والتأكد من أن نوعه هو 

let num= "100.56789 Views";
// write the code here
console.log(parseInt(num) + " " + typeof parseInt(num)); 
console.log(parseFloat(parseFloat(num).toFixed(2)) + " " + typeof parseFloat(parseFloat(num).toFixed(2))); 

// ------------------------------------------------------------------------


// قم بإستخدام المتغير التالي لتخرج بالنتيجة 10
// يجب استخدام ال Number Methods
let flt = 10.4;
// write the code here

console.log(Number.parseInt(flt)); // 10


// ---------------------------------------------------------------------------





let chorus = 'Ja ';
console.log(chorus.repeat(3)); 
// what is the output??

// Ja Ja Ja


// ---------------------------------------------------------------------------------------




//  لديك المتغير التالي والمطلوب 
//Output: 'Hei'  طباعه
let phrase = 'Hei, verden';
console.log(phrase.slice(0, 3)); 


// ---------------------------------------------------------------------------

//  لديك المتغير التالي والمطلوب 
//  Output: 'norge'
let uppercaseText = 'NORGE';
console.log(uppercaseText.toLowerCase());

// ---------------------------------------------------------------------------



// //  لديك المتغير التالي والمطلوب 
// المطلوب ازاله المسافات قبل وبعد الكلمه
let paddedText = '  Norge  ';
console.log(paddedText.trim()); // Output: 'Norge'

// --------------------------------------------------------------------------



let pi = 3.14159;
// write code here
console.log(pi.toFixed(2)); // Output: '3.14'


// ------------------------------------------------------------------------------




console.log(isFinite(2 / 0)); 
// what is the output??
// false 

// -----------------------------------------------------------------------------

// لديك متغير يحتوي على String
// المطلوب جلب أول حرف من ال String
// يجب طباعه الحرف صغير Small Letter
// يجب تنفيذ الحل ب 3 طرق مختلفة
let userName = "Ahmed";
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());

// ----------------------------------------------------------------------------------






