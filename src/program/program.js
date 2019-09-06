function toggleFullProgram() {
  document.querySelectorAll('.program__module').forEach((module, ind) => {
    if(ind > 1) {
      module.hidden = !module.hidden;
    }
  });
}
(function () {
  const showMoreBtn = document.querySelector('.program__show-more-btn');
  toggleFullProgram();
  document.querySelector('.program__show-more').addEventListener('mousedown', () => {
    toggleFullProgram();
    showMoreBtn.classList.toggle('program__show-more-btn--activated')
  });
  document.querySelector('.program__show-more').addEventListener('touchstart', () => {
    toggleFullProgram();
    showMoreBtn.classList.toggle('program__show-more-btn--activated')
  });
})();