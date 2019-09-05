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

function changeNavLinks() {
  if(document.location.pathname !== '/') {
    document.querySelectorAll('a').forEach((link) => {
      if(link.hash[0] === '#') {
        link.href = `${document.location.origin}/${link.hash}`;
      }
    })
  }
}


changeNavLinks();
slowScroll('#', 'navbar');