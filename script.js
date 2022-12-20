let guitarras = [
    {orden: 1, nombre: "Gibson Les Paul Studio", precio: 3000},
    {orden: 2, nombre: "Gibson Flying V", precio: 3600},
    {orden: 3, nombre: "Fender Stratocaster", precio: 4500},
    {orden: 4, nombre: "Fender Telecaster", precio: 4000},
    {orden: 5, nombre: "Epiphone SG Special", precio: 2500},
    {orden: 6, nombre: "Ibanez Gio", precio: 3200},
]

let carrito = []

let opcion = Number(prompt("Bienvenido a Teho Guitar Store. ¿Desea comprar una guitarra? \n 1. Sí \n 2. No"))

while(opcion != 1 && opcion != 2){
    alert("Ingrese una opción correcta")
    opcion = Number(prompt("Bienvenido a Teho Guitar Store. ¿Desea comprar una guitarra? \n 1. Sí \n 2. No"))
}

if(opcion == 1){
alert("Estas son las guitarras que tenemos en stock")
let productos = guitarras.map((guitarra) => guitarra.orden + ". " + guitarra.nombre + " " + guitarra.precio + "$")
alert(productos.join(" - "))
} else if (opcion == 2){
    alert("Gracias por su visita")
}

while(opcion != 2){
    let guitarra = prompt("Ingresa el Nro de orden de la guitarra que quieras comprar")
    let precio = 0

    if(guitarra == "1" || guitarra == "2" || guitarra == "3" || guitarra == "4" || guitarra == "5" || guitarra == "6"){
        switch(guitarra){
            case "1":
                precio = 3000
                break
            case "2":
                precio = 3600
                break
            case "3":
                precio = 4500
                break
            case "4":
                precio = 4000
                break
            case "5":
                precio = 2500
                break
            case "6":
                precio = 4200
                break
            default:
                break
        }
        let unidades = Number(prompt("¿Cuántas guitarras de ese modelo va a comprar?"))

        carrito.push({guitarra, unidades, precio})
        
    } else{
        alert("Ingrese una opción correcta")
    }

    opcion = Number(prompt("¿Desea comprar algo más? \n 1. Sí \n 2. No"))

    while(opcion == 2){
        alert("Muchas gracias por su compra")
        carrito.forEach((compraFinal) => {
            alert(`ID del producto: ${compraFinal.guitarra}, Unidades: ${compraFinal.unidades}, Total: ${compraFinal.unidades * compraFinal.precio} $`)
        })
    break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert("El total a pagar es: " + total + " $")