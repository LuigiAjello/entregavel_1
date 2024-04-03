
function Calculadora(numero1,numero2, operador){
  let resultado 
  let num1  = Number(numero1)
  let num2 = Number (numero2)
   switch (operador) {
       case "+":
               resultado = num1 + num2
           break;
       case "-":
               resultado  = num1 - num2 
           break;
       case "*":
               resultado = num1 * num2
           break;

       case "/":
        if (num2 === 0) {
          resultado = "Divisão por zero";
      } else {
          resultado = num1 / num2;
      }
           break;
       case "e":
        if (numero2 < 0) {
          resultado = 1;
          for (let i = 0; i < -numero2; i++) {
              resultado /= numero1;
          }
      } else {
          resultado = 1;
          for (let i = 0; i < numero2; i++) {
              resultado *= numero1;
          }
      }

           break;

       default:
               resultado = ("Essa opção não existe ")
           break;
   }
      
return resultado 
      

}


let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}