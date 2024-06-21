// Obtener el botón "C O N C E R T O"
const goToHomeButton = document.getElementById('goToHome');

// Agregar un evento de clic al botón para redirigir a la página principal
goToHomeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});


// Función para actualizar el resumen de selección de entradas en la página dei biglietti
function updateTicketSummary() {
    // Obtener el recuento de cada tipo de entrada
    const countGeneral = parseInt(localStorage.getItem('countGeneral')) || 0;
    const countVIP = parseInt(localStorage.getItem('countVIP')) || 0;

    // Calcular el precio total de cada tipo de entrada y el precio total de todas las entradas
    const priceGeneral = countGeneral * 30; // Precio por entrada general
    const priceVIP = countVIP * 50; // Precio por entrada VIP
    const total = priceGeneral + priceVIP; // Precio total de todas las entradas

    // Actualizar los elementos del resumen con los valores calculados
    document.getElementById('summaryGeneral').textContent = countGeneral;
    document.getElementById('summaryVIP').textContent = countVIP;
    document.getElementById('summaryTotal').textContent = '€' + total;

    // Actualizar los contadores de entradas
    document.querySelectorAll('.ticket-count').forEach(function(countElement) {
        const ticketType = countElement.parentElement.dataset.ticketType;
        const count = parseInt(localStorage.getItem(`count${ticketType}`)) || 0;
        countElement.textContent = count > 0 ? count : '';
    });
}

// Función para limpiar la selezione (reiniciar todos los contadores)
function clearSelection() {
    localStorage.removeItem('countGeneral');
    localStorage.removeItem('countVIP');
    updateTicketSummary();
}

// Escuchar eventos de clic en los botones de agregar/quitar entradas y limpiar selezione en la página dei biglietti
document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('btnAdd') || target.classList.contains('btnRemove')) {
        const ticketType = target.parentElement.dataset.ticketType;
        let count = parseInt(localStorage.getItem(`count${ticketType}`)) || 0;
        if (target.classList.contains('btnAdd')) {
            count++;
        } else {
            count = Math.max(0, count - 1);
        }
        localStorage.setItem(`count${ticketType}`, count);
        updateTicketSummary(); // Actualizar el resumen de la selección en la página dei biglietti
    } else if (target.id === 'clearSelection') {
        clearSelection(); // Limpiar la selezione
    }
});

// Llamar a la función para actualizar el resumen al cargar la página
updateTicketSummary();
