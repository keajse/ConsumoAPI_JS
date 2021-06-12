let botonConsultar = document.getElementById('consultar');

//Detectar el clic en el botón
botonConsultar.addEventListener("click", consultarReserva);


function consultarReserva() {
    fetch('https://lauraserranoapi.herokuapp.com/reserva/consulta')
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos));
}