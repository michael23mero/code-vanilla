let data = [] ;
let datos;
let mostrar = document.getElementById('datos');

document.getElementById('formulario').addEventListener('submit', (e)=>{
    e.preventDefault();
    Create();
    Read();
    document.getElementById('formulario').reset();
});

function Create(){
    let storage = JSON.parse(localStorage.getItem('llave'));
    let nombre = document.getElementById('nombre').value;

    if(nombre === ''){
        alert("POR FAVOR RELLENE LOS CAMPOS");
    }
     else{
        if(storage == null){
            data.push(nombre);
            localStorage.setItem('llave', JSON.stringify(data));
        }
        else{
            data = JSON.parse(localStorage.getItem('llave'));
            data.push(nombre);
            localStorage.setItem('llave', JSON.stringify(data));
        }
    }
}

function Read(){
    mostrar.innerHTML = '';
    datos = JSON.parse(localStorage.getItem("llave"));
    if(datos != null){
        for(var i = 0; i < datos.length; i++){
            mostrar.innerHTML += 
            `<div class="row border m-1">
                <div class="card-body">
                    <h6 class="text-center">Tarea: ${datos[i]}</h6>
                </div>
                <div class="card-footer">
                    <button class=" btn btn-info" onclick="Editar(${i})">
                        <i class="fas fa-edit"></i> Editar</button>
                    <button class="btn btn-danger" onclick="Delete(${i})">
                        <i class="fas fa-trash-alt"></i> Eliminar</button>
                </div>
            </div>`
        }
    }
}

function Update(i){
    let nombreUpdate = JSON.parse(localStorage.getItem("llave"));
    nombreUpdate[i] = document.getElementById("nuevoNombre").value;
    if(nombreUpdate[i] == ''){
        alert("POR FAVOR RELLENE LOS CAMPOS");
    }
    else{
        localStorage.setItem("llave", JSON.stringify(nombreUpdate));
        Read();
    }
}

function Delete(i){
    let nombreDelete = JSON.parse(localStorage.getItem("llave"));
    nombreDelete.splice(i, 1);
    localStorage.setItem("llave", JSON.stringify(nombreDelete));
    Read();
}

function Editar(x){
    let nombreEditar = JSON.parse(localStorage.getItem("llave"));
    mostrar.innerHTML = '';
    for(var i = 0; i <  nombreEditar.length; i++){
        if(i == x){
            mostrar.innerHTML += 
            `<div class="card p-2">
                <div class="card-body">
                    <h6 class=text-center> Nuevo Nombre De Usuario: </h6>
                        <div class=form-group>
                            <input class="form-control" id="nuevoNombre" placeholder="${nombreEditar[i]}">
                        </div>
                        <div class="row m-1">
                            <button class="col-6 text-white btn btn-success" onclick="Update(${i})">
                                <i class="fas fa-edit"></i> Actualizar</button>
                            <button class="col-6 text-white btn btn-danger" onclick="Read()">
                                <i class="fas fa-ban"></i> Cancelar</button>
                        </div>
                </div>
            </div>`
        }
    }
}