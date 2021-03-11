

var pregunta2 = document.getElementById("pregunta2");
var valorSeleccionado2 = pregunta2.options[pregunta2.selectedIndex].value;
var valorSeleccionado2N = parseFloat(valorSeleccionado2);

var pregunta3 = document.getElementById("pregunta3");
var valorSeleccionado3 = pregunta3.options[pregunta3.selectedIndex].value;
var valorSeleccionado3N = parseFloat(valorSeleccionado3);

var pregunta4 = document.getElementById("pregunta4");
var valorSeleccionado4 = pregunta4.options[pregunta4.selectedIndex].value;
var valorSeleccionado4N = parseFloat(valorSeleccionado4);

var pregunta5 = document.getElementById("pregunta5");
var valorSeleccionado5 = pregunta5.options[pregunta5.selectedIndex].value;
var valorSeleccionado5N = parseFloat(valorSeleccionado5);

var pregunta6 = document.getElementById("pregunta6");
var valorSeleccionado6 = pregunta6.options[pregunta6.selectedIndex].value;
var valorSeleccionado6N = parseFloat(valorSeleccionado6);

var pregunta7 = document.getElementById("pregunta7");
var valorSeleccionado7 = pregunta7.options[pregunta7.selectedIndex].value;
var valorSeleccionado7N = parseFloat(valorSeleccionado7);

var pregunta8 = document.getElementById("pregunta8");
var valorSeleccionado8 = pregunta8.options[pregunta8.selectedIndex].value;
var valorSeleccionado8N = parseFloat(valorSeleccionado8);

var pregunta9 = document.getElementById("añosvida").value;
var valorSeleccionado9N = parseFloat(pregunta9);


resultado = 0;


function calcular1() {

  var pregunta1 = document.getElementById("nombreproyecto").value;

  var pregunta2 = document.getElementById("pregunta2");
  var valorSeleccionado2 = pregunta2.options[pregunta2.selectedIndex].value;
  var valorSeleccionado2N = parseFloat(valorSeleccionado2);

  var pregunta3 = document.getElementById("pregunta3");
  var valorSeleccionado3 = pregunta3.options[pregunta3.selectedIndex].value;
  var valorSeleccionado3N = parseFloat(valorSeleccionado3);

  var pregunta4 = document.getElementById("pregunta4");
  var valorSeleccionado4 = pregunta4.options[pregunta4.selectedIndex].value;
  var valorSeleccionado4N = parseFloat(valorSeleccionado4);

  var pregunta5 = document.getElementById("pregunta5");
  var valorSeleccionado5 = pregunta5.options[pregunta5.selectedIndex].value;
  var valorSeleccionado5N = parseFloat(valorSeleccionado5);

  var pregunta6 = document.getElementById("pregunta6");
  var valorSeleccionado6 = pregunta6.options[pregunta6.selectedIndex].value;
  var valorSeleccionado6N = parseFloat(valorSeleccionado6);

  var pregunta7 = document.getElementById("pregunta7");
  var valorSeleccionado7 = pregunta7.options[pregunta7.selectedIndex].value;
  var valorSeleccionado7N = parseFloat(valorSeleccionado7);

  var pregunta8 = document.getElementById("pregunta8");
  var valorSeleccionado8 = pregunta8.options[pregunta8.selectedIndex].value;
  var valorSeleccionado8N = parseFloat(valorSeleccionado8);

  var pregunta9 = document.getElementById("añosvida").value;
  var valorSeleccionado9N = parseFloat(pregunta9);

  resultado = valorSeleccionado2N + valorSeleccionado3N + valorSeleccionado4N + valorSeleccionado5N + valorSeleccionado6N + valorSeleccionado7N + valorSeleccionado8N + valorSeleccionado9N;

  var validacion = 0;

  if (resultado >= 38){
    validacion = "Si paso el cuestionario, es un Activo"
  }else {
    validacion = "No paso el cuestionario, es un gasto"
  }

  alert("El proyecto " + pregunta1 + " "+ validacion + resultado);
}

var validacion = 0;

if (resultado >= 38){
  validacion = "Si paso el cuestionario, es un Activo"
}else {
  validacion = "No paso el cuestionario, es un gasto"
}
