document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmpasswordInput = document.getElementById('confirmpassword');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Helper function to show/hide error messages
    const setError = (element, message) => {
        const formGroup = element.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');

        errorDisplay.textContent = message;
        formGroup.classList.add('error');
        formGroup.classList.remove('success');
    };

    const setSuccess = (element) => {
        const formGroup = element.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');

        errorDisplay.textContent = '';
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
    };

    // Validation functions
    const validateName = () => {
        const nameValue = nameInput.value.trim();
        if (nameValue === '') {
            setError(nameInput, 'Name is required.');
            return false;
        }
        setSuccess(nameInput);
        return true;
    };

    const validateEmail = () => {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            setError(emailInput, 'Email is required.');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            setError(emailInput, 'Please enter a valid email address.');
            return false;
        }
        setSuccess(emailInput);
        return true;
    };

    const validatePhone = () => {
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (phoneValue === '') {
            setError(phoneInput, 'Phone number is required.');
            return false;
        } else if (!phoneRegex.test(phoneValue)) {
            setError(phoneInput, 'Please enter a valid phone number (e.g., 123-456-7890).');
            return false;
        }
        setSuccess(phoneInput);
        return true;
    };

    const validatePassword = () => {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            setError(passwordInput, 'Password is required.');
            return false;
        } else if (passwordValue.length < 8) {
            setError(passwordInput, 'Password must be at least 8 characters long.');
            return false;
        } else if (!/[A-Z]/.test(passwordValue)) {
            setError(passwordInput, 'Password must contain an uppercase letter.');
            return false;
        } else if (!/[a-z]/.test(passwordValue)) {
            setError(passwordInput, 'Password must contain a lowercase letter.');
            return false;
        } else if (!/[0-9]/.test(passwordValue)) {
            setError(passwordInput, 'Password must contain a number.');
            return false;
        }
        setSuccess(passwordInput);
        return true;
    };

    const validateConfirmPassword = () => {
        const ConfirmpasswordValue = ConfirmpasswordInput.value.trim();
        if (ConfirmpasswordValue === '') 
        setSuccess(passwordInput);
        return true;
    };


    // Event listeners for real-time validation on user input
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    passwordInput.addEventListener('blur', validatePassword);
    
    
    // Add input event for more dynamic feedback
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    passwordInput.addEventListener('input', validatePassword);
    
    

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents page from reloading on form submission

        // Run all validations on submit
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();


        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            // All fields are valid
            form.reset();
            confirmationMessage.style.display = 'block';
            confirmationMessage.textContent = 'Form submitted successfully! Thank you.';
            
            // Hide confirmation message after a few seconds
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 5000);
        } else {
            confirmationMessage.style.display = 'none';
        }
    });
});