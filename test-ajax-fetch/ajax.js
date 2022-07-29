document.getElementById('btnAjax').addEventListener('click', function btnAjax(){
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'nota.txt', true);
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('txtAjax').innerHTML = this.responseText
        }
    }
})

document.getElementById('btnAjaxObtener').addEventListener('click', function btnAjaxObtener(){
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'data.json', true);
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.getElementById('tableAjax');
            res.innerHTML = ''
            res.innerHTML += ` <tr>
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
                res.innerHTML += `
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
        }
    }
})