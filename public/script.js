document.addEventListener('DOMContentLoaded', () => {
    const showAlertButton = document.getElementById('showAlert');
    const customAlert = document.getElementById('customAlert');
    const closeAlertButton = document.getElementById('closeAlert');
    const confirmButton = document.getElementById('confirmBtn');

    // Función para mostrar el cuadro de diálogo
    const showCustomAlert = () => {
        customAlert.style.display = 'block';
    };

    // Función para cerrar el cuadro de diálogo
    const closeCustomAlert = () => {
        customAlert.style.display = 'none';
    };

    // Agregar eventos
    showAlertButton.addEventListener('click', showCustomAlert);
    closeAlertButton.addEventListener('click', closeCustomAlert);
    confirmButton.addEventListener('click', closeCustomAlert);
});