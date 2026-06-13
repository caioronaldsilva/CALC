const menuBtn = document.querySelector('.menuBtn');
const popup = document.getElementById('mainPopup');
const popupX = document.querySelector('.popup-header-button');
const themeBtn = document.getElementById('themeBtn');
const themeColor = document.querySelector('meta[name="theme-color"]');
const body = document.getElementById('body');

function closePopup() {
    popup.style.display = 'none';
}

menuBtn.addEventListener('click', () => {

    if (popup.style.display === 'block') {
        closePopup();
    }

    else {
        popup.style.display = 'block';
    }

})

function themeSwitcher() {

    if (body.style.filter == '') {
        body.style.filter = 'invert(100%)';
        themeColor.setAttribute('content', 'white');
        localStorage.setItem('themeChoosed', 'white');
    }

    else if (body.style.filter == 'invert(100%)') {
        body.style.filter = '';
        themeColor.setAttribute('content', 'black');
        localStorage.setItem('themeChoosed', 'black');
    }

}

themeBtn.addEventListener('click', () => {
    closePopup();
    themeSwitcher();
})