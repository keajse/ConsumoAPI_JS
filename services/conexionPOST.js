//Se crean referencias en memoria para almacenar las etiquetas a controlar
let botonRegistrar = document.getElementById('registrar');

//Detectar el clic en el botón
botonRegistrar.addEventListener("click", obtenerDatosReserva);

//Crear la función obtenerDatosReserva
function obtenerDatosReserva(event) {

    event.preventDefault();
    //console.log("Paz y bien, vamos por buen camino");

    //Capturar los datos del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let numPersonas = document.getElementById('numPersonas').value;
    let fechaInicio = document.getElementById('fechaInicio').value;
    let fechaFinal = document.getElementById('fechaFinal').value;
    let tipoPaquete = document.getElementById('tipoPaquete').value;

    //console.log(nombre, apellido, telefono, numPersonas, fchaInicio, fchaFinal, tipoPaquete)

    let reserva={
        nombre,
        apellido,
        telefono,
        numPersonas,
        fechaInicio,
        fechaFinal,
        tipoPaquete
    }

    conectarAPI(reserva);

    alert("Reserva registrada con éxito")
}

function conectarAPI(reserva){ 
    //console.log(reserva);

    //URI del servicios
    //const URI="https://lauraserranoapi.herokuapp.com/reserva/nueva";

    //Formato X-WWW
    let datosEnvio= `nombre=${reserva.nombre}&apellido=${reserva.apellido}&telefono=${reserva.telefono}&numPersonas=${reserva.numPersonas}&fechaInicio=${reserva.fechaInicio}&fechaFinal=${reserva.fechaFinal}&tipoPaquete=${reserva.tipoPaquete}`

    fetch(`https://lauraserranoapi.herokuapp.com/reserva/nueva`, {
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:datosEnvio
    })

    //Generar petición (HTTP)
    /*let peticion={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:datosEnvio
    }*/

    //4. LLamar al servidor(asincrona)
    //fetch(URI,peticion)
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos));
}