document.getElementById('botonAdicionar').addEventListener('click', adicionarTarea);

function adicionarTarea() {
    const Imput = document.getElementById('InputTarea');
    const ValorImput = Imput.value.trim();

    if (ValorImput !== '') {
        const Lista = document.getElementById('ListaTareas');
        
        const li = document.createElement('li');
        const textoTareas = document.createElement('span');
        textoTareas.textContent = ValorImput;

        // Botón para marcar como completada
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Botón para eliminar la tarea
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function(e) {
            // Función para Evitar que se dispare el evento de completar
            e.stopPropagation(); 
            Lista.removeChild(li);
        });

        li.appendChild(textoTareas);
        li.appendChild(deleteButton);
        Lista.appendChild(li);
        Imput.value = ''; // Limpiar el campo de texto
    }else{
        alert('Por favor, ingrese una tarea');
    }
}
