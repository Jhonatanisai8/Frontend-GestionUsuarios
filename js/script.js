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
                <button class="button-red">Eliminar</button>
                <button class="button-blue">Modificar</button>
                </td>
        </tr>`
        html = html + row;
    }

    document.querySelector('#customers > tbody').outerHTML = html;
}
