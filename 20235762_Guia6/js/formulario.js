const inputNombre = document.getElementById('idTxtNombre');
const inputApellido = document.getElementById('idTxtApellido');
const inputFechaNacimiento = document.getElementById('idTxtFechaNacimiento');
const inputRdMasculino = document.getElementById('idRdMasculino');
const inputRdFemenino = document.getElementById('idRdFemenino');
const cmbPais = document.getElementById('idCmbPais');
const inputDireccion = document.getElementById('idTxtDireccion');
const inputNombrePais = document.getElementById('idNombrePais');
const buttonAgregarPaciente = document .getElementById('idBtnAgregar');
const buttonLimpiarPaciente = document.getElementById('idBtnLimpiar');
const buttonMostrarPaciente = document.getElementById('idBtnMostrar');
const buttonAgregarPais = document.getElementById('idBtnAddPais');
const notificacion = document.getElementById('idNotificacion');
const mensaje = document.getElementById('idMensaje');
const toast = new bootstrap.Toast(notificacion);
const idModal = document.getElementById('idModal');
let arrayPaciente = []; 
const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";
    inputNombre.focus();
};
const addPaciente = function () {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = 
        inputRdMasculino.checked == true 
            ? "Hombre" 
            : inputRdFemenino.checked == true 
            ? "Mujer" 
            : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;
    if (
        nombre != "" && 
        apellido != "" && 
        fechaNacimiento !="" && 
        sexo != "" && 
        pais != "0" && 
        direccion != ""
    ) {
        arrayPaciente.push(
            new Array (nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
        );
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        toast.show();
        limpiarForm();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};
//Ejercicos complementarios
function eliminarPaciente(index) {
    arrayPaciente.splice(index, 1);
    imprimirPacientes();
    mensaje.innerHTML = "Eliminado exitosamente";
    toast.show();
}
function Edicion(index, boton) {
    const fila = boton.closest("tr");
    const celdas = fila.querySelectorAll("td[contenteditable='false']");
    celdas.forEach(celda => {
        celda.setAttribute("contenteditable", "true");
        celda.classList.add("table-warning");
    });
    boton.innerHTML = `<i class="bi bi-save"></i> Guardar`;
    boton.classList.replace("btn-primary", "btn-success");
    boton.onclick = () => guardarEdicion(index, boton);
}
function guardarEdicion(index, boton) {
    const fila = boton.closest("tr");
    const celdas = fila.querySelectorAll("td[contenteditable='true']");
    arrayPaciente[index] = Array.from(celdas).map(celda => celda.textContent);
    celdas.forEach(celda => {
        celda.setAttribute("contenteditable", "false");
        celda.classList.remove("table-warning");
    });
    boton.innerHTML = `<i class="bi bi-pencil-square"></i> Editar`;
    boton.classList.replace("btn-success", "btn-primary");
    boton.onclick = () => Edicion(index, boton);
    mensaje.innerHTML = "Edición exitosa";
    toast.show();
}
//Fin ejericios complementarios
function imprimirFilas() {
    let $fila = "";
    arrayPaciente.forEach((element, index) => {
        $fila += `
            <tr>
                <td scope="row" class="text-center fw-bold">${index + 1}</td>
                <td contenteditable="false">${element[0]}</td>
                <td contenteditable="false">${element[1]}</td>
                <td contenteditable="false">${element[2]}</td>
                <td contenteditable="false">${element[3]}</td>
                <td contenteditable="false">${element[4]}</td>
                <td contenteditable="false">${element[5]}</td>
                <td>
                    <button onclick="Edicion(${index}, this)" type="button" class="btn btn-primary">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
                    <button onclick="eliminarPaciente(${index})" type="button" class="btn btn-danger">
                        <i class="bi bi-trash3-fill"></i> Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
    return $fila;
}
  const imprimirPacientes = () => {
    let $table = `
      <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
            <tr>
              <th scope="col" class="text-center" style="width: 5%">#</th>
              <th scope="col" class="text-center" style="width: 15%">Nombre</th>
              <th scope="col" class="text-center" style="width: 15%">Apellido</th>
              <th scope="col" class="text-center" style="width: 10%">Fecha nacimiento</th>
              <th scope="col" class="text-center" width: 10%">Sexo</th>
              <th scope="col" class="text-center" style="width: 30%">País</th>
              <th scope="col" class="text-center" style="width: 25%">Dirección</th>
              <th scope="col" class="text-center" style="width: 10%">Opciones</th>
            </tr>
            ${imprimirFilas()}
        </table>
      </div>
    `;

    document.getElementById("idTablaPacientes").innerHTML = $table;
  };
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;
    if (paisNew != "") {
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;
        cmbPais.appendChild(option);
        mensaje.innerHTML = "Pais agregado correctamente";
        toast.show();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};
buttonLimpiarPaciente.onclick = () => {
  limpiarForm();
};
buttonAgregarPaciente.onclick = () => {
  addPaciente();
};
buttonMostrarPaciente.onclick = () => {
  imprimirPacientes();
};
buttonAgregarPais.onclick = () => {
  addPais();
};
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});
limpiarFormulario();