const URL_API = 'http://127.0.0.1:8080/api/'
document.addEventListener("DOMContentLoaded", search);
function init() {
    search()
}
async function search() {
    let url = URL_API + 'custumers'
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    let resultado = await response.json();
    console.log(resultado)
    let html = ''
    for (custumer of resultado) {
        // debugger;
        let row = `
        <tr>
        <td>${custumer.firstname}</td>
            <td>${custumer.lastname}</td>
            <td>${custumer.email}</td>
            <td>${custumer.phone}</td>
            <td>${custumer.address}</td>
            <td>
            <button class="button-blue">Modificar</button>
            <button class="button-red" onclick="deleteCustumer(${custumer.custumer_id})" >Eliminar</button>
                </td>
        </tr>`
        html = html + row;
    }

    document.querySelector('#customers > tbody').outerHTML = html;
}

async function deleteCustumer(id) {
    let respuesta = confirm('¿ESTAS SEGURO DE ELIMINARLO?')
    if (respuesta) {
        // alert("Se Elimino")
        console.log(respuesta)
        let url = URL_API + 'custumers/' + id
        /*let response =*/
        await fetch(url, {
            "method": 'DELETE',
            "headers": {
                "Content-Type": 'application/json'
            }
        })
        search()
    }
}

async function saveCustumer() {
    // datos del formulario 
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let email = document.getElementById("txtEmail").value;
    let telefono = document.getElementById("txtTelefono").value;
    let direccion = document.getElementById("txtDireccion").value;
    let data = {
        // "custumer_id": 3,
        "firstname": nombre,
        "lastname": apellido,
        "email": email,
        "phone": telefono,
        "address": direccion
    }
    console.log(data)
    console.log(typeof (data))
    let url = URL_API + 'custumers'
    let response = await fetch(url, {
        "method": 'POST',
        "body": JSON.stringify(data),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    // search()
    window.location.reload()
}
