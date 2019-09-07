function slowScroll(triggerSymbol, headerClassName) {
  const allLinks = document.querySelectorAll('a');

  allLinks.forEach((link) => {
    if (link.hash[0] === triggerSymbol) {
      link.onclick = (e) => {
        e.preventDefault();
        slowScrolling(e);
      }
    }
  });

  function slowScrolling(event) {
    const id = event.target.hash,
      to = document.querySelector(id).offsetTop - document.querySelector(`.${headerClassName}`).clientHeight - 10;
    window.scroll({
      top: to,
      left: 0,
      behavior: 'smooth'
    });
  }
}

function manageNavLinks() {
  if(document.location.pathname !== '/' || document.location.pathname !== '/index.html') {
    const nav = document.querySelector('.navbar__menu-wrapper');
    const navHandle = (e) => {
      if(e.target.hash === '#programs' || e.target.hash === '#stages') {
        const language = localStorage.getItem('lang') || 'az';
        switch (localStorage.getItem('lang')) {
          case 'az':
            window.open(`${document.location.origin}/${e.target.hash}`, '_self');
            break;
          case "en":
            window.open(`${document.location.origin}/index_en.html${e.target.hash}`, '_self');
            break;
          case 'ru':
            window.open(`${document.location.origin}/index_ru.html${e.target.hash}`, '_self');
            break;
          default:
            localStorage.setItem('lang', 'az');
            window.open(`${document.location.origin}/${e.target.hash}`, '_self');
            break;
        }
      } else if(e.target.parentElement.classList.contains('navbar__submenu-wrapper')) {
        window.open(e.target.href, '_self');
      } else {
        window.scroll({
          top: document.querySelector(e.target.hash).offsetTop,
          left: 0,
          behavior: 'smooth'
        });
      }
    };
    nav.addEventListener('click', navHandle);
    nav.addEventListener('touchstart', navHandle);
    nav.addEventListener('mousedown', navHandle);
  }
}

if(!localStorage.getItem('lang')) {
  localStorage.setItem('lang', "az");
}
manageNavLinks();
slowScroll('#', 'navbar');