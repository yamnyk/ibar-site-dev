function toggleFullProgram() {
  document.querySelectorAll('.program__module').forEach((module, ind) => {
    if(ind > 1) {
      module.hidden = !module.hidden;
    }
  });
}
(function () {
  const showMoreBtn = document.querySelector('.program__show-more-btn') || document.createElement('div');
  const showMore = document.querySelector('.program__show-more') || document.createElement('div');
  toggleFullProgram();
  const expandMoreHandler = (e) => {
    e.preventDefault();
    window.scroll({
      top: document.querySelectorAll('.program__module')[0].offsetTop - 80,
      left: 0,
      behavior: 'smooth'
    });
    toggleFullProgram();
    showMoreBtn.classList.toggle('program__show-more-btn--activated');
  };
  showMore.addEventListener('mousedown', expandMoreHandler);
  showMore.addEventListener('touchstart', expandMoreHandler);
})();