let num1='';
let num2='';
let result=0;
let oper=null;

let display=document.querySelector('.display');
let opps=document.querySelectorAll('#opps');
opps.forEach((button)=> button.addEventListener('click',operator))

let nums= document.querySelectorAll('.nums');
nums.forEach((button)=> button.addEventListener('click',number))

let equals= document.querySelector('.equals');
equals.addEventListener('click',operate);

let backspace= document.querySelector('.backspace');
backspace.addEventListener('click',deleted);

let dot= document.querySelector('.dot');
dot.addEventListener('click',number);

function number(e){
    let digit= e.target.textContent;
    if(oper==null){
        if(digit=='.'&& num1.includes('.'))return;
        num1+=digit;
        display.textContent=num1;    
    }
    else{
        if(digit=='.' && num2.includes('.'))return;
        num2+=digit;
        display.textContent=num2;
    }

}
function operator(e){
    let operator=e.target.textContent;
    if(oper!==null && num2!==''){
        operate();
    }
    oper=operator;
    display.textContent= num1+ oper;
}
function operate(e){
let a= Number(num1);
let b= Number(num2);
    if (oper=='+'){
        result =a+b;
    }
    else if(oper=='-'){
        result= a-b;
    }
    else if(oper=='*'){
        result=a*b;
    }
    else if(oper=='/'){
        if(b==0){
            result='Put something valid!'
        }else{
        result= a/b;
        result=result.toFixed(4);
        }
    }
    else{
        result='';
    }
    display.textContent=result;
    num1=result.toString();
    num2='';
    oper=null;
}
function deleted(e){
    if(oper==null ){
        num1=num1.toString().slice(0,-1);
        display.textContent=num1;
    }
    else if(num2!==''){
        num2=num2.toString().slice(0,-1);
        display.textContent= num2;
    }
    else{
    result = result.toString().slice(0,-1);
    num1=result;
    display.textContent=result;
    }
}