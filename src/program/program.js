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