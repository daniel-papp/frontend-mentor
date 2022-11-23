const formValidator = (function() {

    const submitButton = document.querySelector('.submit-btn');
    const userFirstName = document.querySelector('#user-firstname');
    const userLastName = document.querySelector('#user-lastname');
    const userEmail = document.querySelector('#user-email');
    const userPass = document.querySelector('#user-pass');


    const checkEmptyFields = function() {
        if (!userFirstName.checkValidity()) userFirstName.removeAttribute('placeholder');
        if (!userLastName.checkValidity()) userLastName.removeAttribute('placeholder');
        if (!userEmail.checkValidity()) userEmail.removeAttribute('placeholder');
        if (!userPass.checkValidity()) userPass.removeAttribute('placeholder');
    }

    submitButton.addEventListener('click', checkEmptyFields);
    
})()