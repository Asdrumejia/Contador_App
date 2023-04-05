const contador = document.getElementById('contar');
const sumar = document.getElementById('incr');
const restar = document.getElementById('decr');
const reset = document.getElementById('reset');

let numero = 0;

//Sumar
sumar.addEventListener("click", () => {
    numero++;
    contador.innerHTML = numero;
});


//Restar
restar.addEventListener("click", () => {

  if(numero === 0){}
  else{
      numero--;
      contador.innerHTML = numero;
  }
});


//Reset
reset.addEventListener("click", () => {
  numero = 0;
  contador.innerHTML = numero;
});





