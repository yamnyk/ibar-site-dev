function toggleFullProgram() {
  const allModules = document.querySelectorAll('.program__module');
  allModules.forEach((module, ind) => {
    if(ind > 1) {
      module.hidden = !module.hidden;
    }
  });
  window.scroll({
    top: allModules[0].offsetTop - 80,
    left: 0,
    behavior: 'smooth'
  })
}
(function () {
  const showMoreBtn = document.querySelector('.program__show-more-btn') || document.createElement('div');
  const showMore = document.querySelector('.program__show-more') || document.createElement('div');
  toggleFullProgram();
  showMore.addEventListener('mousedown', (e) => {
    e.preventDefault();
    toggleFullProgram();
    showMoreBtn.classList.toggle('program__show-more-btn--activated')
  });
  showMore.addEventListener('touchstart', (e) => {
    e.preventDefault();
    toggleFullProgram();
    showMoreBtn.classList.toggle('program__show-more-btn--activated')
  });
})();