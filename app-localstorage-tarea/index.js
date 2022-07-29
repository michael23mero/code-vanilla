console.log('Funcionando')

document.getElementById('formularioTarea').addEventListener('submit', guardarTarea);

function guardarTarea(e){
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    let tarea = {
        titulo,
        descripcion
    };

    if(localStorage.getItem('tareas') === null){
        let tareas = []
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }else{
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    obtenerTareas();
    document.getElementById('formularioTarea').reset();
    e.preventDefault();
}

function obtenerTareas(){
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let verTareas = document.getElementById('tareas');
    verTareas.innerHTML = '';
    for(let i = 0; i < tareas.length; i++){
        let titulo = tareas[i].titulo;
        let descripcion = tareas[i].descripcion;

        verTareas.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p>${titulo} / ${descripcion} -- 
                    <a href="#" onclick="eliminarTarea('${titulo}')" class="btn btn-danger l-5">Eliminar</a>
                </p>
            </div>
        </div>`;
    }
}

obtenerTareas();

function eliminarTarea(titulo){
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for(let i = 0; i < tareas.length; i++){
        if(tareas[i].titulo == titulo){
            tareas.splice(i, 1);
        }
    }

    localStorage.setItem('tareas', JSON.stringify(tareas));
    obtenerTareas();
}