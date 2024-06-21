document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón del menú y el contenido del menú desplegable
    var menuButton = document.getElementById("menuButton");
    var menuContent = document.querySelector(".menuContent");

    // Verificar si el botón y el menú existen
    if (menuButton && menuContent) {
        // Agregar un evento de clic al botón del menú
        menuButton.addEventListener("click", function() {
            // Alternar la clase 'show' en el contenido del menú para mostrar u ocultar el menú
            menuContent.classList.toggle("show");
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener("click", function(event) {
            if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
                menuContent.classList.remove("show");
            }
        });
    }

    // Obtener el botón del menú
    var menuButton = document.getElementById("menuButton");
    // Obtener el contenido del menú desplegable
    var menuContent = document.querySelector(".menuContent");

    // Agregar un evento de clic al botón del menú
    menuButton.addEventListener("click", function() {
        // Alternar la clase 'show' en el contenido del menú para mostrar u ocultar el menú
        menuContent.classList.toggle("show");
    });

    // Restablecer los contadores de entradas a cero
    localStorage.removeItem('countGeneral');
    localStorage.removeItem('countVIP');
    
});
