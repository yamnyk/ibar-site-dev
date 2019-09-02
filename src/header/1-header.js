// ************************************************************************
// Handle scrolling page





// ************************************************************************






// ************************************************************************
// Handle burger menu
function uncheckBurgerMenu() {
    document.getElementById('navbar__checkbox').checked = false;
}

function hideMenu(e) {
    if (e.target.closest('A')) {
        uncheckBurgerMenu();
    }
}

document.querySelector('.navbar__menu-wrapper').addEventListener('click',  (e) => {
    if (document.body.clientWidth < 981) {
        hideMenu(e);
    }

});

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 979) {
        uncheckBurgerMenu();
    }
});
// ************************************************************************

