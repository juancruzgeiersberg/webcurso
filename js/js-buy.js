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

BTN_BUY.addEventListener("click", () => {
    if (CANT_PRODUCT.value !== "" && DIRECCION.value !== ""){
        alert("Gracias por su compra!.");
        INPUT_PRODUCT.value = "";
    }else{
        alert("Por favor complete los cambpos obligatorios ( * )")
    }
});

document.addEventListener("DOMContentLoaded", insertProduct());