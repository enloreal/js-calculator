const result = document.querySelector('.result')
let buffer = '0';

function btnClick(value) {
  if (value.length === 1) {
   if (isNaN(parseInt(value))) {
    handleSymbol(value);
    console.log('symbol');
   } else {
    handleNumber(value);
    console.log('number');
   }
  }
   render();
}

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '←':
            if (buffer.length > 1) {
                buffer = buffer.substring(0, buffer.length - 1);
            } else {
                buffer = '0'
            };
            break;
        case '+':
            console.log('+')
            break;
    }
}

function init() {
    document
        .querySelectorAll('.btns')
        addEventListener("click", function (event) {
            btnClick(event.target.innerText);
        });
}
init()

function render() {
    result.innerText = buffer;
}