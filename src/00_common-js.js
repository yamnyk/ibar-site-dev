function slowScroll(triggerSymbol) {
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
      to = document.querySelector(id).offsetTop - 80;
    window.scroll({
      top: to,
      left: 0,
      behavior: 'smooth'
    });
  }
}

slowScroll('#');