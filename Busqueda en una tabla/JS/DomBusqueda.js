
function buscar() {
    //Declarar la variable y encontrar el elemento por ID
    const busqueda = document.getElementById('Buscar').value.toLowerCase();
    //Verfificar que se haya digitado un valor a buscar
    if (busqueda.trim() === "") {
        alert("Por favor, digite un dato para buscarlo en la tabla");
        return;
    }
    //Decalrar la variable y encontrar el elemento por ID de la tabla
    let tabla = document.getElementById('tabla');
    let filas = tabla.getElementsByTagName('tr');
    let resultado = 0;

    //Recorrer cada fila de la tabla y verificar si la celda contiene la palabra buscada
    for (let i = 1; i < filas.length; i++) {
        let celdas = filas[i].getElementsByTagName('td');
        let encontrado = false;
        //Recorrer cada celda de la fila y verificar si contiene la palabra buscada
        for (let j = 0; j < celdas.length; j++) {
            if (celdas[j].textContent.toLowerCase().includes(busqueda)) {
                encontrado = true;
                break;
            }
        }
        //Mostrar o ocultar la fila correspondiente a la palabra buscada y actualizar el número de coincidencias encontrado
        if (encontrado) {
            filas[i].style.display= '';
            resultado++;
        } else {
            filas[i].style.display = "none";
        }
    }
    //Mostrar en el div "resultado" el número de coincidencias encontrado en la tabla
    document.getElementById('resultado').innerHTML = `Se encontraron: ${resultado}`+ " coincidencia(s).";
    if (resultado === 0) {
        alert("No se encontraron resultados para la búsqueda");
    }
    document.getElementById('Buscar').value= '';
}