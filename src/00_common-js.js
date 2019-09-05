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
  if(document.location.pathname !== '/') {
    const nav = document.querySelector('.navbar__menu-wrapper');
    const navHandle = (e) => {
      if(e.target.hash !== '#contacts' && e.target.hash !== 'appForm') {
        e.preventDefault();
        window.open(`${document.location.origin}/${e.target.hash}`, '_self')
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

manageNavLinks();
slowScroll('#', 'navbar');