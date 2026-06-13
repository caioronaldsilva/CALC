const mainMenu = document.getElementById('mainMenu');
const colorCards = document.getElementById('colorCards');

function openPopup(popupId, event) {

    event.stopPropagation();
    menuButton.style.transform = "rotate(90deg)";

    if (popupId === 'mainMenu') {

        if (mainMenu.style.display === 'block') {
            closePopup();
        }

        else {
            mainMenu.style.display = 'block';
        }

    }

    else if (popupId === 'colorCards') {
        colorCards.style.display = 'block';
    }

}

function closePopup() {

    colorCards.style.display = 'none';
    mainMenu.style.display = 'none';
    menuButton.style.transform = "rotate(180deg)";

}

document.addEventListener('click', (event) => {

    const clickingInMainMenu = mainMenu.contains(event.target);
    const clickingInColorCards = colorCards.contains(event.target);

    if (!clickingInMainMenu && !clickingInColorCards) {
        closePopup();
    }

})