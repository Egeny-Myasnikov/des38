
document.querySelectorAll('.close').forEach(e => {
  e.addEventListener('click', ()=>{
    new Audio("sound/close.ogg").play();
  });
});

function feedbackForm() {
  let ft = document.querySelector('.feedback-telegram'),
    btnForm = document.querySelector('.btn-form'),
    truecheck = document.querySelector('.truecheck');
    

  document.querySelectorAll('#oft').forEach(elem => {
   elem.addEventListener('click', () => {
    ft.style.display = 'grid';
    setTimeout(() => {
      ft.style.opacity = '1';
    }, 100);
  })
  });
  document.querySelector('.close-form').addEventListener('click', () => {
    ft.style.opacity = '0';
    setTimeout(() => {
      ft.style.display = 'none';
    }, 900);
  })
  ft.addEventListener('mousemove', (e) => {
    let x = (e.clientX * 60) / 1000;
    let y = (e.clientY * 60) / 1000;
    ft.style.backgroundPosition = x + 'px ' + y + 'px';
  })


  ft.addEventListener('change', () => {
    let text = document.querySelector('.consent');
    if (!truecheck.checked) {
      btnForm.setAttribute('disabled', 'true');
     text.style.opacity = 1;

    } else {
      btnForm.removeAttribute('disabled');
       text.style.opacity = 0;
    }
  })
}
feedbackForm()


function menu() {
  let menu = document.querySelector('menu');
  document.querySelectorAll('.burger-menu').forEach(elem => {
        elem.addEventListener('click', () => {
    menu.style.display = 'block';
  })
});
  document.querySelector('.close-menu').addEventListener('click', () => {
    menu.style.display = 'none';
  })

  function move(e) {
    this.querySelectorAll('.item').forEach(item => {
      item.style.transform = `translateY(` + (e.clientY - 250) * 70 / 1000 + `px)`;
    })
  }
  menu.addEventListener("mousemove", move);

}

menu();

  