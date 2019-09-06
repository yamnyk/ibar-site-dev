// ************************************************************************
// Handle Change Languages
const langList = document.getElementById('navbar__lang-list');
let langStorage = localStorage.getItem('lang');

langList.addEventListener('change', () => {
    debugger
    switch (langList.value) {
        case 'ru':
            localStorage.setItem('lang','ru');
            window.location = '/index_ru.html';
            break;
        case 'az':
            localStorage.setItem('lang','az');
            window.location = '/index.html';
            break;
        case 'en':
            localStorage.setItem('lang','en');
            window.location = '/index_en.html';
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

