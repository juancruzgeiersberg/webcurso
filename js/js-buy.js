const INPUT_PRODUCT = document.getElementById("product_selected");
const PRODUCT_SELECTED = new URLSearchParams(window.location.search);
const BTN_BUY = document.getElementById("btn-buy");
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
    INPUT_PRODUCT.value = "";
});

document.addEventListener("DOMContentLoaded", insertProduct());