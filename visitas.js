function contarVisitas() {
    // Incrementar el contador
    let contador = parseInt(localStorage.getItem('contador') || 0);
    contador++;
    localStorage.setItem('contador', contador);

    // Mostrar el contador en la página
    document.getElementById('contador').innerHTML = contador;
}

window.onload = contarVisitas;
