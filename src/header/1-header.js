// ************************************************************************
// Handle smooth scrolling to section
function scrollToSection(element) {
    // Menu height correction in px
    const menuHeight = 68;
    window.scroll(
      {
          top: element.offsetTop - menuHeight,
          left: 0,
          behavior: 'smooth'
      })
}

// Listener on menu item
document.querySelector('.navbar__content').addEventListener('click',  function (e) {
    e.preventDefault();
    if (e.target.closest('A')) {
        scrollToSection(document.getElementById(e.target.hash.slice(1)));
    }
});

// Listener on button
document.querySelector('a.application').addEventListener('click',  function (e) {
    e.preventDefault();
    if (e.target.closest('A')) {
        scrollToSection(document.getElementById(e.target.hash.slice(1)));
    }
});


// ************************************************************************
// Handle Change Languages
const langList = document.getElementById('navbar__lang-list');
langList.addEventListener('change', () => {
    switch (langList.value) {
        case 'ru':
            window.location = '/index.html';
            break;
        case 'az':
            window.location = '/index_az.html';
            break;
        case 'en':
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

