const formValidator = (function() {

    const submitButton = document.querySelector('.submit-btn');
    const userFields = document.querySelectorAll('input');

    const checkEmptyFields = function() {

        for (let field of userFields) {
            if (!field.checkValidity()) field.removeAttribute('placeholder');
        }
    }

    submitButton.addEventListener('click', checkEmptyFields);

})()