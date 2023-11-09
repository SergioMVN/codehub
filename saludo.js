function miFuncionDeClic() {
    alert("lo sentimos. este contenido aun no esta disponible.");
  }

var botones = document.getElementsByClassName("miBoton");
for (var i = 0; i < botones.length; i++) {
  botones[i].onclick = miFuncionDeClic;
}





