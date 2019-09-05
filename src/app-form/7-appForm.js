const form = document.querySelector('#appForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#formName');
  const age = document.querySelector('#formAge');
  const tel = document.querySelector('#formPhone');
  const email = document.querySelector('#formMail');
  const program = document.querySelector('#formProgram');
  const schedule = document.querySelector('#formSchedule');
  const letter = document.querySelector('#formLetter');

  const url = new URL('https://script.google.com/macros/s/AKfycbzKBJ4yX6b8mwtzJmaPtGew0wOCthTeceoXNAidAJE53y_vsA/exec');
  url.searchParams.append('name', name.value);
  url.searchParams.append('age', age.value);
  url.searchParams.append('tel', tel.value);
  url.searchParams.append('mail', email.value);
  url.searchParams.append('program', program.value);
  url.searchParams.append('schedule', schedule.value);
  url.searchParams.append('letter', letter.value);

  fetch(url).then((res) => {
    const modal = document.querySelector('.app-modal');
    modal.style.display = 'flex';

    document.querySelector('.app-modal__msg > .btn-extra').onclick = (e) => {
      document.querySelector('.app-modal').style.display = 'none';
    }
  }, (error) => {
    console.dir(error)
  });

  name.value = '';
  age.value = '';
  tel.value = '';
  email.value = '';
  program.value = '';
  schedule.value = '';
  letter.value = '';
});