let buttons=document.querySelectorAll('button'); // get all buttons
let result=document.getElementById('result');  // get result input 
let firstNumber="";   // first number of operation will be stored here
let secondNumber="";  // second number of operation will be stored here
let operator=null;   // operator will be stored here

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        // console.log(buttons[i].innerText);
        if(buttons[i].id.includes('num')){
            if(operator==null){
                result.value+=buttons[i].innerText;
                firstNumber=result.value;
            }
            else{
                if(secondNumber=="") {
                    result.value="";
                    result.value+=buttons[i].innerText;
                    secondNumber=result.value;
                }
                else{
                    result.value+=buttons[i].innerText;
                    secondNumber=result.value;
                }
            }
        }
        else if(buttons[i].id==('clear')){
            firstNumber="";
            secondNumber="";
            operator=null;
            result.value="";
        }
        else if(buttons[i].id.includes('decimal')){
            if(!result.value.includes('.')){
                result.value+=buttons[i].innerText;
            }
        }
        else if(buttons[i].id.includes('plus')){
            operator='+';
        }
        else if(buttons[i].id.includes('subtract')){
            operator='-';
        }
        else if(buttons[i].id.includes('multiply')){
            operator='*';
        }
        else if(buttons[i].id.includes('divide')){
            operator='/';
        }
        else if(buttons[i].id.includes('equal')){
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
    });
}

