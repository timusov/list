document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    submitButton.disabled = true;

    form.addEventListener('input', (event) => {
        const loginField = document.getElementById('userLogin');
        const objectField = document.getElementById('object');
        const problemDescriptionField = document.getElementById('problemDescription');

        if (loginField.value && objectField.value && problemDescriptionField.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });

    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();

        const loginField = document.getElementById('userLogin').value;
        const objectField = document.getElementById('object').value;
        const problemDescriptionField = document.getElementById('problemDescription').value;
        const fileUploadField = document.getElementById('fileUpload').files[0];

        if (!loginField || !objectField || !problemDescriptionField || !fileUploadField) {
            alert('Все поля должны быть заполнены');
            return;
        }

        try {
            const response = await fetch('/your-google-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: new FormData(form)
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }

            alert('Заявка успешно отправлена!');
        } catch (error) {
            alert('Произошла ошибка при отправке данных: ' + error.message);
        }
    });
});
