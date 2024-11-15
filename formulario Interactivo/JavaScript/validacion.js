
//Crear un evento para iniciar la validación
document.getElementById('Formulario').addEventListener('submit',function(evento){
    evento.preventDefault(); //Prevenir el envío del formulario inmediato
    limpiarErrores(); //Lllamar función para limpiar los errores
    borrarMensaje(); //Limpiar el mensaje de exito en caso de ser necesario

    //Asignar las variables con el valor de los elementos por id
    const nombre = document.getElementById('Nombre').value;
    const apellido = document.getElementById('Apellido').value;
    const email = document.getElementById('Email').value;
    const contraseña = document.getElementById('Contraseña').value;

    //Variable para controlar la validación
    let Validacion = true;
    
    //Validar el nombre
    if (!nombre) {
        mostrarError('NombreError', 'El nombre es obligatorio.');
        Validacion = false;
    }

    //Validar el apellido
    if (!apellido) {
        mostrarError('ApellidoError', 'El apellido es obligatorio.');
        Validacion = false;
    }

    //Validar el email
    if (!email) {
        mostrarError('EmailError', 'El email es obligatorio y debe tener un formato válido');
        Validacion = false;
    } else if(!validarEmail(email)) {
        mostrarError('EmailError', 'Por favor ingrese un email con un formato válido');
    }

    //Validar la contraseña
    if (!contraseña) {
        mostrarError('ContraseñaError', 'La contraseña es obligatoria y debe tener al menos 6 caracteres.');
        Validacion = false;
    } else if(contraseña.length < 6) {
        mostrarError('ContraseñaError', 'La contraseña debe tener al menos 6 caracteres.');
        Validacion = false;
    }

    if (Validacion) {
        //Si la validación es correcta, mostrar los datos por Consola
        console.log('Los datos registrados fueron enviados exitosamente:');
        console.log('Nombre: '+nombre);
        console.log('Apellido: '+apellido);
        console.log('Email: '+email);
        console.log('Contraseña: '+contraseña);
        mostrarExito('¡Formulario registrado exitosamente! 👌');
    }   
});

//Función para mostrar los errores
function mostrarError(idError, mensaje) {
    document.getElementById(idError).textContent = mensaje;
}

//Función para mostrar procedimiento exitoso
function mostrarExito(mensaje) {
    const mensajeExitoDiv = document.createElement('div');
    mensajeExitoDiv.textContent = mensaje;
    mensajeExitoDiv.classList.add('completado');

    // Insertar el div creado al final del formulario
    const formulario = document.getElementById('Formulario');
    formulario.appendChild(mensajeExitoDiv);
    limpiarContenido();
}

//Función para limpiar los posibles errores
function limpiarErrores() { 
    document.getElementById('NombreError').textContent = '';
    document.getElementById('ApellidoError').textContent = '';
    document.getElementById('EmailError').textContent = '';
    document.getElementById('ContraseñaError').textContent = '';
}

function validarEmail(email) {
    //Función regular para validar el email
    const valido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return valido.test(email);
}

//funcion para eliminar el mensaje de exito
function borrarMensaje() {
    const MensajeExito = document.querySelector('.completado');
    if (MensajeExito) {
        MensajeExito.parentNode.removeChild(MensajeExito);
    }
}

//funcion para limpiar contenido una vez se verifique el formulario
function limpiarContenido(){
    document.getElementById('Nombre').value='';
    document.getElementById('Apellido').value='';
    document.getElementById('Email').value='';
    document.getElementById('Contraseña').value='';
}