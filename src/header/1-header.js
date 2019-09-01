// Add eventListener to .navbar__menu-wrapper on tag-A_click
document.querySelector('.navbar__menu-wrapper').addEventListener('click',  e => {
    if (e.target.closest('A')) {
        document.getElementById('navbar__checkbox').checked = false;
    }
});
