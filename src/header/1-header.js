// ************************************************************************
// Handle Change Languages
const langList = document.getElementById('navbar__lang-list');
let langStorage = localStorage.getItem('lang');

langList.addEventListener('change', () => {
    function redirectURL(toFolder) {
        let resURL = '';
        if(window.location.pathname.includes('frontend')){
            resURL = window.location.origin.concat(toFolder).concat('frontend')
        } else if(window.location.pathname.includes('backend')) {
            resURL = window.location.origin.concat(toFolder).concat('backend')
        } else {
            resURL = window.location.origin.concat(toFolder)
        }
        return resURL;
    }

    switch (langList.value) {
        case 'az':
            localStorage.setItem('lang','az');
            window.location.assign(redirectURL('/'));
            break;
        case 'en':
            localStorage.setItem('lang','en');
            window.location.assign(redirectURL('/en/'));
            break;
        case 'ru':
            localStorage.setItem('lang','ru');
            window.location.assign(redirectURL('/ru/'));
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

