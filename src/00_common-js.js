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
      e.preventDefault();
      if(e.target.hash === '#programs' || e.target.hash === '#stages' || e.target.hash === '#about') {
        const language = localStorage.getItem('lang') || 'az';
        switch (localStorage.getItem('lang')) {
          case 'az':
            window.location.assign(`${document.location.origin}/${e.target.hash}`);
            break;
          case "en":
            window.location.assign(`${document.location.origin}/en/${e.target.hash}`);
            break;
          case 'ru':
            window.location.assign(`${document.location.origin}/ru/${e.target.hash}`);
            break;
          default:
            localStorage.setItem('lang', 'az');
            window.location.assign(`${document.location.origin}/${e.target.hash}`);
            break;
        }
      } else if(e.target.parentElement.classList.contains('navbar__submenu-wrapper')) {
        window.location.assign(e.target.href);
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

(function () {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', "az");
  }
})();
manageNavLinks();
slowScroll('#', 'navbar');