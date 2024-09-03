const btn0 = document.getElementById('btn0')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btnPlus = document.getElementById('btn-plus')
const btnMinus = document.getElementById('btn-minus')
const btnParenthesis = document.getElementById('btn-parenthesis')
const btnParenthesis2 = document.getElementById('btn-parenthesis2')
const btnBack = document.getElementById('btn-back')
const btnErase = document.getElementById('btn-erase')
const btnDot = document.getElementById('btn-dot')
const btnMultiple = document.getElementById('btn-multiple')
const btnDivide = document.getElementById('btn-divide')
const btnEqual = document.getElementById('btn-equal')
const btns = document.querySelectorAll('.btns');
const numbers = document.querySelectorAll('.numbers')

const absolutelyNotEval = function(string){
return new Function('return ' + string)()};
//alternative of Eval

let resultElement = document.getElementById('result')
resultElement.textContent = '0';
//getting the "result" output(?)


function changeZero(num) {
    if(resultElement.textContent == `0${num}`) {
        resultElement.textContent = num;
    }
} // replacing the "0" from the start or when clearing the result area

function reset() {
    for(element of btns){
        element.disabled = false;
    }
    resultElement.textContent = '0';
} //when caught error - diactivate all the buttons for a moment

// function limitLength(){
//     if (resultElement.textContent.length>17){
//         resultElement.textContent = resultElement.textContent.slice(0, -1);
//         alert('The expression is too long!')
//     }
// } //limit the length of input

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
} //allow/not allow user to press some buttons depending on the input


btn0.onclick = function () {
    resultElement.textContent += '0';
    changeZero('0');
    checkPossible();
}
btn1.onclick = function () {
    resultElement.textContent += '1';
    changeZero('1');
    checkPossible();
}
btn2.onclick = function () {
    resultElement.textContent += '2';
    changeZero('2')
    checkPossible();
}
btn3.onclick = function () {
    resultElement.textContent += '3';
    changeZero('3')
    checkPossible();
}
btn4.onclick = function () {
    resultElement.textContent += '4';
    changeZero('4')
    checkPossible();
}
btn5.onclick = function () {
    resultElement.textContent += '5';
    changeZero('5')
    checkPossible();
}
btn6.onclick = function () {
    resultElement.textContent += '6';
    changeZero('6')
    checkPossible();
}
btn7.onclick = function () {
    resultElement.textContent += '7';
    changeZero('7')
    checkPossible();
}
btn8.onclick = function () {
    resultElement.textContent += '8';
    changeZero('8')
    checkPossible();
}
btn9.onclick = function () {
    resultElement.textContent += '9';
    changeZero('9')
    checkPossible();
}
btnDot.onclick = function () {
    resultElement.textContent += '.';
    checkPossible();
}

btnErase.onclick = function () {
    resultElement.textContent = '0';
    checkPossible();
}
btnPlus.onclick = function () {
    resultElement.textContent += '+';
    checkPossible();
}
btnMinus.onclick = function () {
    resultElement.textContent += '-';
    checkPossible();
}
btnMinus.onclick = function () {
    resultElement.textContent += '-';
    checkPossible();
}
btnMultiple.onclick = function () {
    resultElement.textContent += '*';
    checkPossible();
}
btnDivide.onclick = function () {
    resultElement.textContent += '/';
    checkPossible();
}

btnEqual.onclick = function () {
        try{
            resultElement.textContent = absolutelyNotEval(resultElement.textContent)
            if (resultElement.textContent == 'infinity'){
                throw new Error('error'); // вот это говно не работает, тупо не видит это
            }
        } catch (error) {
            console.log(error);
                resultElement.textContent = 'Error';
                for(element of btns){
                    element.disabled = true;
                }
                setTimeout(reset, 2000);
        }
}

btnBack.onclick = function () {
    if (resultElement.textContent.length == 1) {
        resultElement.textContent = '0'
    } else {
        resultElement.textContent = resultElement.textContent.slice(0, -1);
    }
    checkPossible();
} //removing the last symbol in result area

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