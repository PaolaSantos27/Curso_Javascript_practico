function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;


    if(precioConDescuento) {
        return (`El precio con descuento son: $ ${precioConDescuento}.`);
    }else {
        return (`Por favor: Ingrese un valor antes de calcular el descuento.`);
    }
}

function calcularPrecioConDescuentoCupon(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const precioConDescuentoCupon = precioConDescuento - cupon;

    if(precioConDescuentoCupon){
        return (`El precio TOTAL con CUPON es: $ ${precioConDescuentoCupon}.`);
    }else {
        return (`Error: Inserte un cupon válido.`);
    } 
}


function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscound");
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = precioConDescuento;

}


const cupons = ["Adidas", "Nike", "Puma"];

function onclickButtonPriceCupon() {
    const inputPrice1 = document.getElementById("InputPrice");
    const priceValue1 = inputPrice1.value;


    const inputDiscount1 = document.getElementById("InputDiscound");
    const discountValue1 = inputDiscount1.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    let descuento;

    switch(couponValue) {
        case "Adidas":
            descuento = 10;
        break;
        case "Nike":
            descuento = 15;
        break;
        case "Puma":
            descuento = 30;
        break;
    }


    const precioConDescuentoCupon = calcularPrecioConDescuentoCupon(priceValue1, discountValue1, descuento);

    const ResultPC = document.getElementById("ResultPC");
    ResultPC.innerText = precioConDescuentoCupon;
}

