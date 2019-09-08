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
      en: `Thank you for registration. Your application has been accepted and sent for processing.
Our manager will contact you shortly.

If you have any questions, please call + 994 (12) 937.

With kind regards,
The IBA Tech Academy Team`,
      ru: `Спасибо за регистрацию. Ваша заявка получена и отправлена на обработку.
В ближайшее время с вами свяжется наш менеджер.

Если у вас возникли вопросы, требующие срочного ответа, вы можете позвонить по телефону + 994 (12) 937.

С уважением, 
команда IBA Tech Academy`
    };

    let message = responseMessages.az;

    switch (true) {
      case window.location.pathname.includes('az'):
        message = responseMessages.az;
        break;
      case window.location.pathname.includes('en'):
        message = responseMessages.en;
        break;
      case window.location.pathname.includes('ru'):
        message = responseMessages.ru;
        break;
      default:
        message = responseMessages.az;
    }

    fetch("email.php", {
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `sendTo=${email.value}&message=${message}`
    }).then((res) => {
        console.log(res);
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
    debugger
    name.innerHTML = '';
    age.innerHTML = '';
    tel.innerHTML = '';
    email.innerHTML = '';
    // program.innerHTML = '';
    // schedule.innerHTML = '';
    letter.innerHTML = '';
  });
});