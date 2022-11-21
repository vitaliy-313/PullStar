let btnModalShow = document.querySelector('.btn-module');
let modalWrapper = document.querySelector('.modal-wrapper');
let btnModalClosed = document.querySelector('.modal__close');
let closedModalWindow = () => modalWrapper.style.display = "none";

btnModalShow.onclick = function () {
    modalWrapper.style.display = "block"
}
btnModalClosed.onclick = function () {
    closedModalWindow();
}
modalWrapper.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closedModalWindow();
    }
})

// отработка нажатия на escape
document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
        closedModalWindow()
    }
})