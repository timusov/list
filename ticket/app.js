document.addEventListener('DOMContentLoaded', () => {
    const problemForm = document.getElementById('problemForm');
    const objectSelect = document.getElementById('objectSelect');
    const descriptionTextarea = document.getElementById('descriptionTextarea');
    const uploadFileInput = document.getElementById('uploadFileInput');
    const sendButton = document.getElementById('sendButton');

    // Проверка наличия файла перед отправкой
    let fileUploadError = false;

    uploadFileInput.
