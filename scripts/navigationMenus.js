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

themeBtn.addEventListener('click', () => {

    body.style.filter = 'invert(100%)';

});