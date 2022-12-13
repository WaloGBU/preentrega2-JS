let guitarras = [
    {nombre: "Gibson Les Paul Studio", precio: 3000},
    {nombre: "Gibson Flying V", precio: 3600},
    {nombre: "Fender Stratocaster", precio: 4500},
    {nombre: "Fender Telecaster", precio: 4000},
    {nombre: "Epiphone SG Special", precio: 2500},
    {nombre: "Ibanez Gio", precio: 3200},
]

let saludo = Number(prompt("Bienvenido a Teho Guitar Store. ¿Desea comprar una guitarra? \n 1. Sí \n 2. No"))
switch (saludo) {
    case 1:
        let opcion = Number(prompt(" Tienes estas opciones: \n 1. Gibson Les Paul Studio \n 2. Gibson Flying V \n 3. Fender Stratocaster \n 4. Fender Telecaster \n 5. Epiphone SG Special \n 6. Ibanez Gio \n 7. No me gustan. Ya no deseo comprar"))
        switch (opcion) {
            case 1:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            case 2:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            case 3:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            case 4:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            case 5:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            case 6:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            case 7:
                alert("El pago a realizar es de " + guitarras.precio1)
                break
            default:
                alert("Ingrese una opción correcta")
        }
        break;
    default:
        alert ("Gracias por su visita")
        break;
}


