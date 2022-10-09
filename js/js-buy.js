const INPUT_PRODUCT = document.getElementById("product_selected");
const PRODUCT_SELECTED = new URLSearchParams(window.location.search);
const BTN_BUY = document.getElementById("btn-buy");
const CANT_PRODUCT = document.getElementById("cant-product");
const DIRECCION = document.getElementById("direccion");
let id = PRODUCT_SELECTED.get('id');
let cant_productos = 7;

function insertProduct(){
    if (id !== null){
        if(id <= cant_productos){
            INPUT_PRODUCT.value = `Torta ${id}`;
        }else{
            INPUT_PRODUCT.value = `Postre ${id-cant_productos}`;
        }
    }
}

function logOn(){
    let log_on = JSON.parse(localStorage.getItem("log"));
    if (log_on !== null && log_on !== undefined && log_on.log === true){
        return true;
    }else{
        return false;
    }
}

BTN_BUY.addEventListener("click", (e) => {
    e.preventDefault();
    if(logOn()){
        if (CANT_PRODUCT.value !== "" && DIRECCION.value !== ""){
            location.href = "../index.html";
            alert("Gracias por su compra!.");
            INPUT_PRODUCT.value = "";
        }else{
            alert("Por favor complete los cambpos obligatorios ( * )")
        }
    }else{
        location.href = "./login.html";
        alert("No está conectado, por favor primero ingrese su usario.");
    }

});

document.addEventListener("DOMContentLoaded", insertProduct());