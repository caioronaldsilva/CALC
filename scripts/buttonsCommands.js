document.addEventListener('keydown', function pressedButton(event) {

    document.querySelectorAll('.buttons').forEach((key) => {
        if (event.key === key.textContent) {
            showWhatAreClicked(key);
        }
    })

});