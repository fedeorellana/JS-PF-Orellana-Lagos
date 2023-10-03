

function mostrarOcultar(idDescripcion, idComprar, idAgregar) {
    var descripcion = document.getElementById(idDescripcion);
    var botonComprar = document.getElementById(idComprar);
    var botonAgregar = document.getElementById(idAgregar);

    if (descripcion.style.display === "none") {
        descripcion.style.display = "block";
        botonComprar.style.display = "block";
        botonAgregar.style.display = "block";
    } else {
        descripcion.style.display = "none";
        botonComprar.style.display = "none";
        botonAgregar.style.display = "none";
    }
}

// Función para comprar un producto
function comprarProducto(producto) {
    // Coloca aquí la lógica para realizar la compra del producto
    alert("Has comprado el producto: " + producto);
}

var compraJSON = JSON.stringify(compra);

if (localStorage.getItem("carrito") === null) {
    localStorage.setItem("carrito", "[" + compraJSON + "]");
} else {
    var carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.push(compraJSON);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

total += precio;
mostrarTotal(); 

// Variable global para el total
var total = 0;

// Función para calcular y mostrar el total
function mostrarTotal() {
    var totalElement = document.getElementById("total-a-pagar");
    totalElement.textContent = "Total a pagar: $" + total.toFixed(2);
}

// Llama a esta función inicialmente para mostrar el total inicial (0)
mostrarTotal();

function agregarAlCarrito(producto, precio) {
    // Agrega el producto al carrito (puedes implementar esta lógica según tus necesidades)
    // Por ejemplo, podrías tener un array que almacena los productos en el carrito.

    // Actualiza el total
    total += precio;
    mostrarTotal(); // Llama a la función para mostrar el nuevo total
}


var comprarBtn = document.getElementById("comprar-btn");
comprarBtn.addEventListener("click", function() {
    // Solicitar el número de tarjeta
    var numeroTarjeta = prompt("Ingrese el número de tarjeta:");

    // Solicitar el nombre del titular
    var nombreTitular = prompt("Ingrese el nombre del titular:");

    // Solicitar el CVV
    var cvv = prompt("Ingrese el código de seguridad (CVV):");

    // Solicitar la cantidad de cuotas
    var cuotas = prompt("Ingrese la cantidad de cuotas:");

    // Mostrar un agradecimiento
    alert("GRACIAS POR SU COMPRA!");

});

// Evento para el botón de Cancelar
var cancelarBtn = document.getElementById("cancelar-btn");
cancelarBtn.addEventListener("click", function() {
    // Coloca aquí la lógica para cancelar la compra y reiniciar el carrito
    total = 0;
    mostrarTotal(); // Actualiza el total a cero
    localStorage.removeItem("carrito"); 
});