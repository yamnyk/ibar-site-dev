const form = document.querySelector('#appForm');
form.addEventListener('submit', (e) => {
  const name = document.querySelector('#formName').value;
  const age = document.querySelector('#formAge').value;
  const tel = document.querySelector('#formPhone').value;
  const email = document.querySelector('#formMail').value;
  const program = document.querySelector('#formProgram').value;
  const letter = document.querySelector('#formLetter').value;

  const url = new URL('https://script.google.com/macros/s/AKfycbzKBJ4yX6b8mwtzJmaPtGew0wOCthTeceoXNAidAJE53y_vsA/exec');
  url.searchParams.append('name', name);
  url.searchParams.append('age', age);
  url.searchParams.append('tel', tel);
  url.searchParams.append('mail', email);
  url.searchParams.append('program', program);
  url.searchParams.append('letter', letter);

  fetch(url);
});