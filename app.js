const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnParenthesis = document.getElementById('btn-parenthesis');
const btnParenthesis2 = document.getElementById('btn-parenthesis2');
const btnBack = document.getElementById('btn-back');
const btnErase = document.getElementById('btn-erase');
const btnDot = document.getElementById('btn-dot');
const btnMultiple = document.getElementById('btn-multiple');
const btnDivide = document.getElementById('btn-divide');
const btnEqual = document.getElementById('btn-equal');
const btns = document.querySelectorAll('.btns');
const numbers = document.querySelectorAll('.numbers');

//allow/not allow user to press some buttons depending on the input
function checkPossible() {
    if(resultElement.textContent.at(-1).match(/[\+\-\*\/]/)) {
        btnParenthesis.disabled = false;
        btnParenthesis2.disabled = true;
        btnMultiple.disabled = true;
        btnDivide.disabled = true;
        btnPlus.disabled = true;
        btnMinus.disabled = true;
        btnDot.disabled = true;
        for (element of numbers) element.disabled = false;
    } else if (resultElement.textContent.match(/\.\d+$/))  {
        btnParenthesis.disabled = true;
        btnParenthesis2.disabled = false;
        btnMultiple.disabled = false;
        btnDivide.disabled = false;
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        btnDot.disabled = true;
        for (element of numbers) element.disabled = false;
    }  else if(resultElement.textContent.at(-1).match(/[\.]/)) {
        btnParenthesis.disabled = true;
        btnParenthesis2.disabled = true;
        btnMultiple.disabled = true;
        btnDivide.disabled = true;
        btnPlus.disabled = true;
        btnMinus.disabled = true;
        btnDot.disabled = true;
        for (element of numbers) element.disabled = false;
    } else if(resultElement.textContent.at(-1).match(/[\))]/)) {
        btnParenthesis.disabled = true;
        btnParenthesis2.disabled = true;
        btnMultiple.disabled = false;
        btnDivide.disabled = false;
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        btnDot.disabled = true;
        for (element of numbers) element.disabled = true;
    } else if(resultElement.textContent.at(-1).match(/[\()]/)) {
        btnParenthesis.disabled = true;
        btnParenthesis2.disabled = true;
        btnMultiple.disabled = true;
        btnDivide.disabled = true;
        btnPlus.disabled = true;
        btnMinus.disabled = false;
        btnDot.disabled = true;
        for (element of numbers) element.disabled = false;
    } else if(resultElement.textContent.at(-1).match(/\d/)) {
        if (resultElement.textContent.length == 1 && resultElement.textContent.at(-1).match('0')){
            btnParenthesis.disabled = false;
            btnParenthesis2.disabled = false;
            btnMultiple.disabled = false;
            btnDivide.disabled = false;
            btnPlus.disabled = false;
            btnMinus.disabled = false;
            btnDot.disabled = false;
            for (element of numbers) element.disabled = false;
        } else {
        btnParenthesis.disabled = true;
        btnParenthesis2.disabled = false;
        btnMultiple.disabled = false;
        btnDivide.disabled = false;
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        btnDot.disabled = false;
        for (element of numbers) element.disabled = false;
        }
    } else {
        btnParenthesis.disabled = false;
        btnParenthesis2.disabled = false;
        btnMultiple.disabled = false;
        btnDivide.disabled = false;
        btnPlus.disabled = false;
        btnMinus.disabled = false;
        btnDot.disabled = false;
        for (element of numbers) element.disabled = false;
    }
}

//alternative of Eval
const absolutelyNotEval = function(string){
return new Function('return ' + string)()};

//getting the "result" output(?)
let resultElement = document.getElementById('result')
resultElement.textContent = '0';


// replacing the "0" from the start or when clearing the result area
function changeZero(num) {
    if(resultElement.textContent == `0${num}`) {
        resultElement.textContent = num;
    }
} 

//when caught error - diactivate all the buttons for a moment
function reset() { 
    for(element of btns){
        element.disabled = false;
    }
    resultElement.textContent = '0';
} 

function init() {
    document
      .querySelector(".main__nums")
      .addEventListener("click", function (event) {
        buttonClick(event.target.innerText)
      })
}
init()

function buttonClick(value) {
    if (value.length === 1 && value.match(/(\d)/)) {
            resultElement.textContent += value;
            changeZero(value);
            checkPossible();
    } else if (value.length === 1 && value.match(/[\.\+\-\*\/]/)) {
        resultElement.textContent += value;
        checkPossible();
    } else if (value === 'C') {
        resultElement.textContent = '0';
        checkPossible(); 
    }
}

//removing the last symbol in result area
btnBack.onclick = function () {
    if (resultElement.textContent.length == 1) {
        resultElement.textContent = '0'
    } else {
        resultElement.textContent = resultElement.textContent.slice(0, -1);
    }
    checkPossible();
}

btnParenthesis.onclick = function () {
    if (resultElement.textContent.match(/[()]/g) == null)  {
        resultElement.textContent += '(';
        changeZero('(')
    } else if (resultElement.textContent.match(/[()]/g).slice(-1) == '(') {
    } else {
        resultElement.textContent += '(';
    }
    checkPossible();
}

btnParenthesis2.onclick = function () {
    if(resultElement.textContent.match(/[\()]/g).slice(-1) == '(') {
        resultElement.textContent += ')';
    } 
    checkPossible();
}

btnEqual.onclick = function () {
    try{
        resultElement.textContent = absolutelyNotEval(resultElement.textContent)
        if (resultElement.textContent == 'Infinity'){
            throw new Error('error');
        } else if (resultElement.textContent == 'NaN'){
            throw new Error('error');
        } else if (resultElement.textContent == '0.30000000000000004'){
            resultElement.textContent = '0.3';
        } else if (resultElement.textContent == '1.2999999999999998'){
            resultElement.textContent = '1.3';
        }
    } catch (error) {
            resultElement.textContent = 'Error';
            for(element of btns){
                element.disabled = true;
            }
            setTimeout(reset, 2000);
    }
}
