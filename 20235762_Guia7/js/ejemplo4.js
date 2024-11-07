const buttonAgregarpagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrrafo = document.querySelector("#idAgregarParrafo");
const pagina = document.querySelector("#idPagina");
buttonAgregarpagina.onclick = function() {
    const contenedorVerificado = document.querySelector("#idDivPage");
    if (!contenedorVerificado) {
         const contenedor = document.createElement("div");
         contenedor.setAttribute("id", "idDivPage");
         contenedor.setAttribute("class", "container");
         contenedor.setAttribute(
            "style",
            "boder:solid 1px black; height:500px; overflow: scroll; overflow; overflox-x: hidden;"
         );
         pagina.appendChild(contenedor);
    } else {
        alert("Ya se agrego el contenedor de la pagina");
    }
};
buttonMenu.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");
    if (contenedor) {
        const menuVerificar = document.querySelectorAll("#idDivPage > header");
        if (menuVerificar.length == 0) {
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        } else {
            alert("Ya ha sido agregado el menu");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina");
    }
};
buttonTitulo.onclick = function() {
    const contenedor = document.querySelector("#idDivPage");
    const menu = document.querySelectorAll("#idDivPage > header");
    if (contenedor) {
        if (menu.length > 0) {
            let titulo = prompt("Agregue el titulo de la pagina");
            if (titulo != "" && titulo != null) {
                const h1 = document.createElement("h1");
                h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
                h1.innerHTML = titulo;
                contenedor.appendChild(h1);
            } else {
                alert(
                    "No se ha registrado ningun titulo , por favor ingrese informacion"
                );
            }
        } else {
            alert("Debe agregar un menu primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina");
    }
};
buttonParrrafo.onclick = function () {
    const contenedor = document.querySelector("#idDivPage");
    const menu = document.querySelectorAll("#idDivPage > header");
    if (contenedor) {
        if (menu.length > 0) {
            let texto = prompt("Agregue un parrafo a su pagina web");
            if (texto !="" && texto != null) {
                const parrafo = document.createElement("p");
                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;
                contenedor.appendChild(parrafo);
            } else {
                alert(
                    "No se ha registrado ningun parrafo, por favor ingrese informacion"
                );
            }
        } else {
            alert("Debe agregar un menu primero");
        }
    } else {
        alert("Pirmero debe agregar un contenedor de pagina");
    }
};