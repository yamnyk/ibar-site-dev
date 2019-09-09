const form = document.querySelector('#appForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#formName').value;
  const age = document.querySelector('#formAge').value;
  const tel = document.querySelector('#formPhone').value;
  const email = document.querySelector('#formMail').value;
  const program = document.querySelector('#formProgram').value;
  const schedule = document.querySelector('#formSchedule').value;
  const letter = document.querySelector('#formLetter').value;

  const url = new URL('https://script.google.com/macros/s/AKfycbzKBJ4yX6b8mwtzJmaPtGew0wOCthTeceoXNAidAJE53y_vsA/exec');
  url.searchParams.append('name', name);
  url.searchParams.append('age', age);
  url.searchParams.append('tel', tel);
  url.searchParams.append('mail', email);
  url.searchParams.append('program', program);
  url.searchParams.append('schedule', schedule);
  url.searchParams.append('letter', letter);

  document.querySelector('#formName').value = '';
  document.querySelector('#formAge').value = '';
  document.querySelector('#formPhone').value = '';
  document.querySelector('#formMail').value = '';
  document.querySelector('#formLetter').value = '';

  document.querySelector('.app-form > .btn-extra').disabled = true;

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
    const applicationCopy = `name: ${name};
    email: ${email};
    age: ${age};
    tel: ${tel};
    program: ${program};
    schedule: ${schedule};
    motivation letter: ${letter};`;

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

    fetch("/email", {
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `sendTo=${email}&message=${message}`
    }).then((res) => {
      fetch("/email", {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `sendTo=apply@ibatech.az&message=${applicationCopy}`
      })
    }).then((res) => {
      console.log(res);
      const modal = document.querySelector('.app-modal');
      modal.style.display = 'flex';

      document.querySelector('.app-modal__msg > .btn-extra').onclick = (e) => {
        document.querySelector('.app-modal').style.display = 'none';
      }
    }, (error) => {
      console.dir(error)
    });
  })
});