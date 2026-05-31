const screen    = document.querySelector('#screen p');
const bEq       = document.getElementById('bEq').textContent;
const aC        = document.getElementById('aC').textContent;
const c         = document.getElementById('c').textContent;

let numString   = '';

// 1. THE CALC LISTEN WHAT ARE CLICKED

document.querySelectorAll('.buttons').forEach((itm) => {
    itm.addEventListener('click', ()                => showWhatAreClicked(itm));
});

// 2. THE CALC SHOW WHAT ARE CLICKED

function showWhatAreClicked(button) {

    if ( button.textContent        === bEq ) {

        arithmeticOperations (numString);

    } else if ( button.textContent === c ) {

        numString                  = numString.slice(numString.length - 1 > numString);
        screen.innerHTML           = numString;

    } else if ( button.textContent === aC ) {

        numString                  = '';
        screen.innerHTML           = numString;

    } else {

        numString                  = numString + button.textContent;
        screen.innerHTML           = numString;

    }
};

// 3. THE CALC RESOLVE WHAT ARE SHOWED

function arithmeticOperations(equation) {

    numString        = Function(`"use strict"; return (${equation})`)();
    screen.innerHTML = numString;

};