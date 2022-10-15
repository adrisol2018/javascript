const productos =  [
    { nombre: "Vino Malbec Cordoba", precio: 2500},
    { nombre: "Vino Cabernet Franc El Gran Enemigo", precio: 4650},
    { nombre: "Vino Malbec Reserva Bag", precio: 3500},
    { nombre: "Vino Mosquita Muerta", precio: 4500},
    { nombre: "Vino SaintFelicien Malbec", precio: 2500},
    { nombre: "Vino Cabernet Rutini ", precio: 3500},
    { nombre: "Vino Blanco Gata Flora Torrontes", precio: 1500},
    { nombre: "Vino Vistades Gradum Carmenere", precio: 2800},
    { nombre: "Vino Cabernet Franc Castizo", precio: 1800},
    { nombre: "Vino Cabernet Franc Ernesto Catena", precio: 2500},
    { nombre: "Vino Cabernet Sauvignon El Esteco", precio: 2500},
    { nombre: "Vino RedBlend Alma Negra", precio: 4500},
    { nombre: "Vino RedBlend Andeluna Elevación", precio: 2500},
    { nombre: "Vino RedBlend Cocodrilo", precio: 2500},

];

let carrito = []

let seleccion = prompt("¿Desea comprar un vino si o no? ")

while (seleccion != "si" && seleccion != "no" ) {
    alert("por favor ingresa si o no")
    seleccion = prompt ("¿Desea comprar un vino si o no?")
}

if (seleccion == "si") {
    alert("a continuación nuestra lista de productos")
   let todoslosVinos= productos.map((producto)=>producto.nombre+" "+producto.precio +"$");
   alert(todoslosVinos.join("-"))    
} else if(seleccion=="no"){
    alert("Gracias por su visita, nos vemos pronto")
}

while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "Vino Malbec Cordoba"|| producto == "Vino Cabernet Franc El Gran Enemigo"||producto == "Vino Malbec Reserva Bag"|| producto == "Vino Mosquita Muerta"|| producto == "Vino SaintFelicien Malbec"|| producto == "Vino Cabernet Rutini" || producto == "Vino Blanco Gata Flora Torrontes"|| producto == "Vino Vistades Gradum Carmenere"|| producto == "Vino Cabernet Franc Castizo "|| producto == "Vino Cabernet Franc Ernesto Catena"||producto == "Vino Cabernet Sauvignon El Esteco"|| producto == "Vino RedBlend Alma Negra"|| producto == "Vino RedBlend Andeluna Elevación"|| producto == "Vino RedBlend Cocodrilo" ) {
        switch (producto) {
            case "Vino Malbec Cordoba":
                precio = 2500;
                break;
            case "Vino Cabernet Franc El Gran Enemigo":
                precio = 4650;
                break;
            case "Vino Malbec Reserva Bag":
                precio = 3500;
                break;
            case "Vino Mosquita Muerta":
                precio = 4500;
                break;
            case "Vino SaintFelicien Malbec":
                precio = 2500;
                break;
            case "Vino Cabernet Rutini ":
                precio = 3500;
                break;
            case "Vino Blanco Gata Flora Torrontes":
                precio = 1500;
                break;
            case "Vino Vistades Gradum Carmenere":
                precio = 2800;
                break;
            case "Vino Cabernet Franc Castizo":
                precio = 1800;
                break;
            case "Vino SaintFelicien Malbec":
                precio = 2500;
                break;
            case "Vino Cabernet Franc Ernesto Catena":
                precio = 2500;
                break;
            case "Vino Cabernet Sauvignon El Esteco":
                precio = 2500;
                break;
            case "Vino RedBlend Alma Negra":
                precio = 4500;
                break;
            case "Vino RedBlend Andeluna Elevación":
                precio = 2500;
                break;
            case "Vino RedBlend Cocodrilo":
                precio = 2500;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("cuantas unidades qieres llevar"))
     carrito.push({producto,unidades,precio})
     console.log(carrito)
    } else{
        alert("no tenermos ese producto")
    }

    seleccion = prompt("¿desea seguir comprando?")
    while (seleccion === "no") {
        alert("gracias por la compra, vuelva pronto")
        carrito.forEach((carritoFinal)=>{
            console.log(`producto:${carritoFinal.producto}, unidades:${carritoFinal.unidades},
            total a pagar por producto${carritoFinal.unidades*carritoFinal.precio} `)
        })
        break;
    }

}