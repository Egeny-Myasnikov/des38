function calc () { 
   function calcIndividual () {
       let premises = document.querySelector('.premises').value,
           discount = 0;
       document.querySelectorAll('.ben-input:checked').forEach(e => {
           discount += Number(e.value);
       });
       let benefit = premises * discount / 100;
      document.querySelector('.result').textContent = premises - benefit + ' руб.' + ' Ваша выгода - ' + benefit + ' руб.';
     }
document.querySelector('.btn').addEventListener('click', calcIndividual)

      }
     calc();