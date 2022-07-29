document.getElementById('btnFetch').addEventListener('click', () =>{
    let obtener = document.querySelector('#txtFetch')
    fetch('nota.txt')
    .then(data => data.text())
    .then(data =>{
        console.log(data)
        obtener.innerHTML = `${data}`
    })
})

obtenerDataFetch()

function obtenerDataFetch(){
    fetch('data.json')
        .then(res => res.json())
        .then(datos => {
            let tableFetchJS = ''
            tableFetchJS += ` <tr>
                    <td>Id</td>
                    <td>Nombres</td>
                    <td>Apellidos</td>
                    <td>Semestre</td>
                    <td>Paralelo</td>
                    <td>Direccion</td>
                    <td>Telefono</td>
                    <td>Correo</td>
                    <td>Matricula</td>
                </tr>`
            for(let data of datos){
                tableFetchJS += `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.nombre}</td>
                    <td>${data.apellido}</td>
                    <td>${data.semestre}</td>
                    <td>${data.paralelo}</td>
                    <td>${data.direccion}</td>
                    <td>${data.telefono}</td>
                    <td>${data.correo_electronico}</td>
                    <td>${data.p_matricula ? "NO" : "SI"}</td>
                <tr>`
            }
            tableFetch.innerHTML += tableFetchJS   
        })
}