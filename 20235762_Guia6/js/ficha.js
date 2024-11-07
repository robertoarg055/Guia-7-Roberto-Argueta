function validarFormulario() {
    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const nit = document.getElementById("nit").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;
    const regexCarnet = /^[A-Za-z]{2}\d{3}$/;
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexDui = /^\d{8}-\d$/;
    const regexNit = /^\d{4}-\d{6}-\d{3}-\d$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexEdad = /^\d+$/;
    if (!regexCarnet.test(carnet)) {
        alert("Carnet. Formato dos letras y tres números, ej. AB001");
        return false;
    }
    if (!regexNombre.test(nombre)) {
        alert("Nombre. Solo puede contener letras y espacios");
        return false;
    }
    if (!regexDui.test(dui)) {
        alert("Dui. El DUI debe tener el formato ########-#");
        return false;
    }
    if (!regexNit.test(nit)) {
        alert("Nit. El NIT debe tener el formato ####-######-###-#");
        return false;
    }
    if (!regexCorreo.test(correo)) {
        alert("Correo. Correo invalido");
        return false;
    }
    if (!regexEdad.test(edad) || parseInt(edad) <= 0) {
        alert("Edad. olo se acepatn numeors positivos");
        return false;
    }
    alert("Fciha enviada");
    return true;
}