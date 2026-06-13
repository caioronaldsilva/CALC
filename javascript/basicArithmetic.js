const screen = document.querySelector('#screen p');
const bEq = document.getElementById('bEq').textContent;
const aC = document.getElementById('aC').textContent;
const c = document.getElementById('c').textContent;

let numString = '0';
screen.innerHTML = numString;

document.querySelectorAll('.buttons').forEach((itm) => {
    itm.addEventListener('click', () => showWhatAreClicked(itm));
})

function showWhatAreClicked(button) {

    if (button.textContent === bEq) {
        numString = numString.replaceAll('x', '*');
        arithmeticOperations(numString);
    }
    
    else if (button.textContent === c) {
        numString = numString.slice(0, -1);
        if (numString === '') {
            numString = '0';
        }
        screen.innerHTML = numString;
    }
    
    else if (button.textContent === aC) {
        numString = '0';
        screen.innerHTML = numString;
    }

    else if ((button.textContent === '-'  ||
              button.textContent === '+') &&
             (numString[numString.length - 1] === '-' ||
              numString[numString.length - 1] === '+' )) {
        numString = numString.slice(0, -1);
    }

    else if ((button.textContent === '/'  ||
              button.textContent === 'x') && 
             (numString[numString.length - 1] === '/' ||
              numString[numString.length - 1] === 'x' ||
              numString[numString.length - 1] === '-' ||
              numString[numString.length - 1] === '+' )) {
        numString = numString.slice(0, -1);
    }

    else {

        if (numString === '0') {
            numString = '';
        }

        numString = numString + button.textContent;


        if (numString === '/' || numString === 'x') {
            numString = '0';
        }

        screen.innerHTML = numString;

    }
    
}

function arithmeticOperations(equation) {

    numString = Function(`"use strict"; return (${equation})`)();
    numString = numString.toString();
    screen.innerHTML = numString;

}