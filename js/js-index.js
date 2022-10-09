const MENU_BAR = document.querySelector(".container-header");
const FOOTER_BAR = document.querySelector(".footer-page");
const SESION_CLOSE = document.getElementById('close-session');
const BTN_BUY = document.getElementById('btn-buy');

/*let sticky = MENU_BAR.offsetTop;*/

/* Assigning a function to the onscroll event of the window. */
/*window.onscroll = function() {changeMenuStricky()};*/

/**
 * If the page is scrolled down more than the height of the menu bar, add the class "fixed-bar" to the
 * menu bar and the menu button. Otherwise, remove the class "fixed-bar" from the menu bar and the menu
 * button.
 */
/*function changeMenuStricky() {
    if (window.pageYOffset > sticky) {
        MENU_BAR.classList.add("fixed-bar");
    } else {
        MENU_BAR.classList.remove("fixed-bar");
    }
  }*/



function verifySession(){
    let verifyStorage = JSON.parse(localStorage.getItem("log"));
    if (localStorage.getItem("log") !== null){
        if (verifyStorage.log){
            SESION_CLOSE.classList.remove('ocultar');
            SESION_CLOSE.classList.add('close-session');
        }
    }
}

SESION_CLOSE.addEventListener("click", () => {
    if (localStorage.getItem("log")){
        SESION_CLOSE.classList.add('ocultar');
        SESION_CLOSE.classList.remove('close-session');
        localStorage.removeItem("log");
    }

});
document.addEventListener('DOMContentLoaded', verifySession());