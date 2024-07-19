let buttons=document.querySelectorAll('button'); // get all buttons
let result=document.getElementById('result');  // get result input 
let firstNumber="";   // first number of operation will be stored here
let secondNumber="";  // second number of operation will be stored here
let operator=null;   // operator will be stored here
 console.log(buttons);
buttons[0].addEventListener('click',function(){
    checkBtn(buttons[0]);
});

buttons[1].addEventListener('click',function(){
    checkBtn(buttons[1]);
});

buttons[2].addEventListener('click',function(){
    checkBtn(buttons[2]);
});

buttons[3].addEventListener('click',function(){
    checkBtn(buttons[3]);
});

buttons[4].addEventListener('click',function(){
    checkBtn(buttons[4]);
});

buttons[5].addEventListener('click',function(){
    checkBtn(buttons[5]);
});

buttons[6].addEventListener('click',function(){
    checkBtn(buttons[6]);
});

buttons[7].addEventListener('click',function(){
    checkBtn(buttons[7]);
});

buttons[8].addEventListener('click',function(){
    checkBtn(buttons[8]);
});

buttons[9].addEventListener('click',function(){
    checkBtn(buttons[9]);
});

buttons[10].addEventListener('click',function(){
    checkBtn(buttons[10]);
});

buttons[11].addEventListener('click',function(){
    checkBtn(buttons[11]);
});

buttons[12].addEventListener('click',function(){
    checkBtn(buttons[12]);
});

buttons[13].addEventListener('click',function(){
    checkBtn(buttons[13]);
});

buttons[14].addEventListener('click',function(){
    checkBtn(buttons[14]);
});

buttons[15].addEventListener('click',function(){
    checkBtn(buttons[15]);
});

buttons[16].addEventListener('click',function(){
    checkBtn(buttons[16]);
});

function checkBtn( btn ){
    if( btn.id.includes('num') ){
        if(operator==null){
            result.value+=btn.innerText;
            firstNumber=result.value;
        }
        else{
            if(secondNumber=="") {
                result.value="";
                result.value+=btn.innerText;
                secondNumber=result.value;
            }
            else{
                result.value+=btn.innerText;
                secondNumber=result.value;
            }
        }
    }
    else if( btn.id==('clear') ){
        firstNumber="";
        secondNumber="";
        operator=null;
        result.value="";
    }
    else if( btn.id.includes('decimal') ){
        if(!result.value.includes('.')){
            result.value+=btn.innerText;
        }
    }
    else if( btn.id.includes('divide') ){
        operator='/';
    }
    else if( btn.id.includes('multiply') ){
        operator='*';
    }
    else if( btn.id.includes('subtract') ){
        operator='-';
    }
    else if( btn.id.includes('plus') ){
        operator='+';
    }
    else if( btn.id.includes('equal') ){
        let finalResult;
        switch(operator){
            case '+':
                finalResult=Number(firstNumber)+Number(secondNumber);
                break;
            case '-':
                finalResult=Number(firstNumber)-Number(secondNumber);
                break;
            case '*':
                finalResult=Number(firstNumber)*Number(secondNumber);
                break;
            case '/':
                finalResult=Number(firstNumber)/Number(secondNumber);
                break;
            default:
                finalResult=0;
        }
        result.value=finalResult;
        firstNumber=0;
        secondNumber=0;
        operator=null;
    }
}
// for(let i=0;i<buttons.length;i++){
//     buttons[i].addEventListener('click',function(){
//         // console.log(buttons[i].innerText);
//         if(buttons[i].id.includes('num')){
//             if(operator==null){
//                 result.value+=buttons[i].innerText;
//                 firstNumber=result.value;
//             }
//             else{
//                 if(secondNumber=="") {
//                     result.value="";
//                     result.value+=buttons[i].innerText;
//                     secondNumber=result.value;
//                 }
//                 else{
//                     result.value+=buttons[i].innerText;
//                     secondNumber=result.value;
//                 }
//             }
//         }
//         else if(buttons[i].id==('clear')){
//             firstNumber="";
//             secondNumber="";
//             operator=null;
//             result.value="";
//         }
//         else if(buttons[i].id.includes('decimal')){
//             if(!result.value.includes('.')){
//                 result.value+=buttons[i].innerText;
//             }
//         }
//         else if(buttons[i].id.includes('plus')){
//             operator='+';
//         }
//         else if(buttons[i].id.includes('subtract')){
//             operator='-';
//         }
//         else if(buttons[i].id.includes('multiply')){
//             operator='*';
//         }
//         else if(buttons[i].id.includes('divide')){
//             operator='/';
//         }
//         else if(buttons[i].id.includes('equal')){
//             let finalResult;
//             switch(operator){
//                 case '+':
//                     finalResult=Number(firstNumber)+Number(secondNumber);
//                     break;
//                 case '-':
//                     finalResult=Number(firstNumber)-Number(secondNumber);
//                     break;
//                 case '*':
//                     finalResult=Number(firstNumber)*Number(secondNumber);
//                     break;
//                 case '/':
//                     finalResult=Number(firstNumber)/Number(secondNumber);
//                     break;
//                 default:
//                     finalResult=0;
//             }
//             result.value=finalResult;
//             firstNumber=0;
//             secondNumber=0;
//             operator=null;
//         }
//     });
// }

