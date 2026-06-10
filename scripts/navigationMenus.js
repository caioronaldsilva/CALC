const menuBtn  = document.querySelector('.menuBtn');
const popup    = document.querySelector('.popup');
const popupX   = document.querySelector('.popup-header-button');
const themeBtn = document.getElementById('themeBtn');
const body     = document.getElementById('body');

menuBtn.addEventListener('click', () => {

    popup.style.display = 'block';

});

popupX.addEventListener('click', () => {

    popup.style.display = 'none';

});

function themeSwitcher() {

    if (body.style.filter == '') {

        console.log(body.style.filter);

        body.style.filter = 'invert(100%)';
        aC.style.filter   = 'invert(100%)';

    } else if (body.style.filter == 'invert(100%)') {

        body.style.filter = '';
        aC.style.filter   = '';

    }

};

themeBtn.addEventListener('click', () => {

    themeSwitcher();

});