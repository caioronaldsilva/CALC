const menuButton = document.querySelector('.menuButton');

function setColors(colorScheme) {

    document.documentElement.setAttribute("data-theme", colorScheme);

    if (colorScheme === 'black') {
        menuButton.style.filter = "";
    }

    else {
        menuButton.style.filter = "invert(100%)";
    }

    localStorage.setItem('colorScheme', colorScheme);

    closePopup();

}