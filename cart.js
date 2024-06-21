// Función para actualizar el resumen de selección de entradas en la página del carrello
function updateCartSummary() {
    // Obtener el recuento de cada tipo de entrada desde el localStorage
    const countGeneral = parseInt(localStorage.getItem('countGeneral')) || 0;
    const countVIP = parseInt(localStorage.getItem('countVIP')) || 0;

    // Sumar 6,5€ por cada entrada
    const processingFee = (countGeneral + countVIP) * 6.5;

    // Actualizar los elementos del carrello con los valores del localStorage
    document.getElementById('countGeneral').textContent = countGeneral;
    document.getElementById('countVIP').textContent = countVIP;

    // Calcular el precio total de todas las entradas
    const totalAmount = (countGeneral * 30) + (countVIP * 50) + processingFee; // Precio total de todas las entradas

    // Actualizar el total a pagar en el carrello
    document.getElementById('totalAmount').textContent = totalAmount + ' €';
}

// Llamar a la función para actualizar el resumen al cargar la página
updateCartSummary();

// Escuchar el evento 'ticketCountUpdated' emitido desde ticket.js
window.addEventListener('ticketCountUpdated', function() {
    // Actualizar el resumen de selección de entradas en la página del carrello
    updateCartSummary();
});

// Botón para volver a la página principal
document.getElementById('goToIndex').addEventListener('click', function() {
    // Reiniciar los contadores y redirigir a la página principal
    localStorage.removeItem('countGeneral');
    localStorage.removeItem('countVIP');
    window.location.href = 'index.html';
});

// Botón para volver a la página dei biglietti
document.getElementById('goToTickets').addEventListener('click', function() {
    // Redirigir a la página dei biglietti
    window.location.href = 'tickets.html';
});
