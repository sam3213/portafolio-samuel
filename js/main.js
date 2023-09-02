
function activarPanel(){

    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");
}

var link = document.getElementById("fileCss");

function themesecundary() {
    link.href="css/Style-secundary.css";
}


function themeterciario(){
    link.href="css/Style-terciario.css";
}


function themeOne(){
    link.href="css/Styles.css";
}