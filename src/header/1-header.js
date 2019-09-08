// ************************************************************************
// Handle Change Languages
const langList = document.getElementById('navbar__lang-list');
let langStorage = localStorage.getItem('lang');

langList.addEventListener('change', () => {
    switch (langList.value) {
        case 'az':
            localStorage.setItem('lang','az');
            window.location = window.location.pathname;
            break;
        case 'en':
            localStorage.setItem('lang','en');
            window.location = 'en' +window.location.pathname;
            break;
        case 'ru':
            localStorage.setItem('lang','ru');
            window.location = 'ru/' + window.location.pathname;
            break;
        default:
            console.log('Unknown language!');
    }
});

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

