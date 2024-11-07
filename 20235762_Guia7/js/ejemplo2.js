const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");
// Validar info del formulario, para esta parte se reciclo codigo de la guia 6 en la cuál creamos una ficha, solo adaptandolo para lo que se pedía
const validarFormulario = () => {
    const correo = document.getElementById("correo").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const password = document.getElementById("password").value;
    const repetirPassword = document.getElementById("repetirPassword").value;
    const intereses = document.querySelectorAll("input[name='intereses']:checked");
    const carrera = document.getElementById("carrera").value;
    const pais = document.getElementById("pais").value;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correo || !fechaNacimiento || !password || !repetirPassword || !carrera || !pais) {
        alert("Por favor complete todos los campos.");
        return false;
    }
    const hoy = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    if (fechaNacimientoDate > hoy) {
        alert("Fecha. Seleccione una fecha valida");
        return false;
    }
    if (!regexCorreo.test(correo)) {
        alert("Correo. Correo inválido.");
        return false;
    }
    if (password !== repetirPassword) {
        alert("Contraseñas. No coinciden");
        return false;
    }
    if (intereses.length === 0) {
        alert("Interes. Seccione una");
        return false;
    }
    if (!carrera) {
        alert("Carrera. Seleeciona una");
        return false;
    }
    if (!pais) {
        alert("Páis. Elija una país");
        return false;
    }
    alert("Validado");
    return true;
};
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;
    let elementos = formulario.elements;
    let totalElementos = elementos.length;
    for (let index = 0; index < totalElementos; index++) {
        let elemento = elementos[index];
        let tipoElemento = elemento.type;
        let tipoNode = elemento.nodeName;
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }
    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;
    bodyModal.innerHTML = resultado;
    modal.show();
};
button.onclick = (event) => {
    event.preventDefault();
    if (validarFormulario()) {
        recorrerFormulario();
    }
};
