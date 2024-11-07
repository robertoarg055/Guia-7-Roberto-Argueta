const newForm = document.getElementById("idNewForm");
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");
const cmbElemento = document.getElementById("idCmbElemento");
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    if (elemento !== "") {
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creará");
    }
};
const newSelect = function () {
    let addElemento = document.createElement("select");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");
    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opción ${i}`;
        addElemento.appendChild(addOption);
    }
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};
const newRadioCheckbox = function (newElemento) {
    let addElemento = document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating");
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};
const newInput = function (newElemento) {
    let addElemento = 
        newElemento === "textarea" 
            ? document.createElement("textarea") 
            : document.createElement("input");
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento === "textarea" ? "" : newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    let iconoLabel = document.createElement("i");
    iconoLabel.setAttribute("class", "bi bi-tag");
    labelElemento.textContent = tituloElemento.value;
    labelElemento.insertAdjacentElement("afterbegin", iconoLabel);
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;
    let divElemento = document.createElement("div");
    divElemento.setAttribute("class", "form-floating mb-3");
    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);
    newForm.appendChild(labelId);
    newForm.appendChild(divElemento);
};
buttonCrear.onclick = () => {
    verificarTipoElemento();
};
// Validación de ID
buttonAddElemento.onclick = () => {
    const newId = `id${nombreElemento.value}`;
    if (newForm.querySelector(`#${newId}`)) {
        alert("Ya hay un ID con ese nombre, esriba uno diferente");
        return;
    }
    if (nombreElemento.value !== "" && tituloElemento.value !== "") {
        let elemento = cmbElemento.value;
        if (elemento === "select") {
            newSelect();
        } else if (elemento === "radio" || elemento === "checkbox") {
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
};
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    tituloElemento.value = "";
    nombreElemento.value = "";
    tituloElemento.focus();
});
// Botón de validación
const validarinfo = () => {
    for (const elemento of newForm.elements) {
        if (
            (["text", "email", "textarea", "color"].includes(elemento.type) && !elemento.value) ||
            (["radio", "checkbox"].includes(elemento.type) && !elemento.checked) ||
            (elemento.nodeName === "SELECT" && elemento.selectedIndex === 0)
        ) {
            alert("Datos o campos faltantes");
            return;
        }
    }
    alert("Validado");
};
const buttonValidar = document.createElement("button");
buttonValidar.textContent = "Verificar";
buttonValidar.className = "btn btn-outline-secondary";
buttonValidar.onclick = validarinfo;
newForm.appendChild(buttonValidar);