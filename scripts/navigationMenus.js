const menuBtn    = document.querySelector('.menuBtn');
const popup      = document.querySelector('.popup');
const popupX     = document.querySelector('.popup-header-button');
const themeBtn   = document.getElementById('themeBtn');
const themeColor = document.querySelector('meta[name="theme-color"]');
const body       = document.getElementById('body');

menuBtn.addEventListener('click', () => {

    popup.style.display = 'block';

});

function closePopup() {

    popup.style.display = 'none';

}

function themeSwitcher() {

    if (body.style.filter == '') {

        body.style.filter = 'invert(100%)';
        themeColor.setAttribute('content', 'white');
        localStorage.setItem('themeChoosed', 'white');

    } else if (body.style.filter == 'invert(100%)') {

        body.style.filter = '';
        themeColor.setAttribute('content', 'black');
        localStorage.setItem('themeChoosed', 'black');

    }

};

popupX.addEventListener('click', () => {

    closePopup();

});

themeBtn.addEventListener('click', () => {

    closePopup();
    themeSwitcher();

});