//funciones

function saludar (usuario){
    console.log(" Bienvenido", usuario)
}

function login(){
    let usuario = prompt ("Ingresa tu nombre de usuario:")
        if (usuario.trim() !== "" && usuario.length > 2){
            saludar (usuario)
            } else {
                console.warn8 ("No se reconoce el dato ingresado.")
            }
}


function verProductos(){
    let productos = "Produstos disponibles: \n" +
                    "1) Cabernet \n" +
                    "2) Malbet \n" +
                    "3) Red"

     let respuesta = prompt("Ingresa el nro. de producti para ver el precio : \n" + productos)
     switch (parseInt(respuesta))    {
        case 1: 
            console.log("producto elegido 'Vino Cabernet'. Su precio es de $25000")

          console.log("producto elegido 'Vino Malbet'. Su precio es de $20000")
        case 2: 
          console.log("producto elegido 'Vino Red'. Su precio es de $30000")

        break;
        case 3: 
        console.log("producto elegido 'Vino Red'. Su precio es de $30000 ")

        break;
        default:
            console.error ("No se conoce el producto ingresado")
     } 
     
     let continuar = ("¿desea consultar el valor de otro producto? ")

     if(continuar){
        verProductos()
     }
     }          
