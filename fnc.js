//Declaramos variables
var opA;
var opB;
var op;
function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
  }
  //Eventos de click
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
}
reset.onclick = function(e){
    clear();
}
suma.onclick = function(e){
    opA = resultado.textContent;
    op = "+";
    limpiar();
}
resta.onclick = function(e){
    opA = resultado.textContent;
    op = "-";
    limpiar();
}
igual.onclick = function(e){
    opB = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
  }
  function clear(){
    resultado.textContent = "";
    opA = 0;
    opB = 0;
    op = "";
  }
  function resolver(){
    var res = 0;
    switch(op){
      case "+":
        res = parseFloat(opA) + parseFloat(opB);
        break;
      case "-":
          res = parseFloat(opA) - parseFloat(opB);
          break;
    }
    clear();
    resultado.textContent = res;
  }