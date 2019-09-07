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

  fetch(url).then(() => {
    let responseMessages = {
      az: `Qeydiyyat üçün təşəkkürümüzü bildiririk. Sizin ərizəniz qəbul olunmuş və baxılmaq üçün təqdim edilmişdir. Yaxın zamanlarda əməkdaşlarımız sizinlə əlaqə saxlayacaqlar.

Hər hansı suallarınızla bağlı +994(12)937 nömrəli Məlumat Mərkəzinə zəng edə bilərsiniz.

Hörmətlə, IBA Tech komandası`,
      en: `Thank you for registering. Your application has been received and sent for processing.
Our manager will contact you shortly.

If you have any questions that require an urgent answer, you can call us at + 994 (12) 937.

With respect, 
the IBA Tech Academy team`,
      ru: `Спасибо за регистрацию. Ваша заявка получена и отправлена на обработку.
В ближайшее время с вами свяжется наш менеджер.

Если у вас возникли вопросы, требующие срочного ответа, вы можете позвонить по телефону + 994 (12) 937.

С уважением, 
команда IBA Tech Academy`
    }

    const data = {
      program: program.value,
    };

    switch (localStorage.getItem('lang')) {
      case 'az':
        data.message = responseMessages.az;
        break;
      case 'en':
        data.message = responseMessages.en;
        break;
      case 'ru':
        data.message = responseMessages.ru;
        break;
      default:
        data.message = responseMessages.en;
    }

    fetch(new URL(document.location.origin+'/js/email.php'), {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      data: JSON.stringify(data)
    }).then((res) => {
      const modal = document.querySelector('.app-modal');
      modal.style.display = 'flex';

      console.log('after email post request - ', res);

      document.querySelector('.app-modal__msg > .btn-extra').onclick = (e) => {
        document.querySelector('.app-modal').style.display = 'none';
      }
    }, (error) => {
      console.dir(error)
    });
  }).then(() => {
    name.innerHTML = '';
    age.innerHTML = '';
    tel.innerHTML = '';
    email.innerHTML = '';
    program.innerHTML = '';
    schedule.innerHTML = '';
    letter.innerHTML = '';
  });
});