let entrada = document.getElementById('entrada'); // Referencia correcta al input
let resultado = document.getElementById('resultados'); // Referencia correcta al elemento donde mostrar los resultados
const boton = document.getElementById('calcula'); // Referencia correcta al botón

function calcularPrestamo(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    
    const monto = parseFloat(entrada.value); // Convierte el valor del input a número
    
    if (isNaN(monto) || monto <= 0) {
        // Si el monto no es un número o es menor o igual a 0
        resultado.textContent = "Por favor, ingresa un monto válido."; // Mensaje de error
    } else {
        const porcentaje = monto * 0.3; // Cálculo del 30% del monto
        resultado.textContent = "El monto con el 30% de interés es: $" + porcentaje.toFixed(2); // Muestra el resultado con 2 decimales
    }
}

// Asocia la función calcularPrestamo al evento de clic en el botón
boton.addEventListener("click", calcularPrestamo);
