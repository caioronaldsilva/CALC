const screen = document.querySelector('#screen p');
const bEq    = document.getElementById('bEq').textContent;
const AC     = document.getElementById('AC').textContent;

let numString   = '';

// 1. THE CALC LISTEN WHAT ARE CLICKED

document.querySelectorAll('.buttons').forEach((itm) => {
    itm.addEventListener('click', ()                => showWhatAreClicked(itm));
});

// 2. THE CALC SHOW WHAT ARE CLICKED

function showWhatAreClicked(button) {

    if ( button.textContent === bEq ) {

        arithmeticOperations (numString);

    } else if ( button.textContent === AC ) {

        numString = '';
        screen.innerHTML = numString;

    } else {

        numString           = numString + button.textContent;
        screen.innerHTML    = numString;

    }
};

// 3. THE CALC RESOLVE WHAT ARE SHOWED

function arithmeticOperations(equation) {

    numString = Function(`"use strict"; return (${equation})`)();
    screen.innerHTML = numString;

};