function validateForm(event) {
    event.preventDefault();

    // Validation for First Name
    const firstNameInput = document.getElementById('firstName');
    if (firstNameInput.value.trim() === '') {
        alert('Please enter your First Name.');
        return;
    }

    // Validation for Last Name
    const lastNameInput = document.getElementById('lastName');
    if (lastNameInput.value.trim() === '') {
        alert('Please enter your Last Name.');
        return;
    }

    // Validation for Phone Number
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumberInput.value.trim())) {
        alert('Please enter a valid 10-digit Phone Number.');
        return;
    }

    // Validation for Address
    const addressInput = document.getElementById('address');
    if (addressInput.value.trim() === '') {
        alert('Please enter your Address.');
        return;
    }

    // Validation for Date of Birth
    const dobInput = document.getElementById('dob');
    if (dobInput.value.trim() === '') {
        alert('Please enter your Date of Birth.');
        return;
    }

    // Validation for Gender
    const genderInput = document.getElementById('gender');
    if (genderInput.value === '') {
        alert('Please select your Gender.');
        return;
    }

    // Validation for Profile Picture
    const profilePictureInput = document.getElementById('profilePicture');
    if (profilePictureInput.value === '') {
        alert('Please upload your Profile Picture.');
        return;
    }

    // Validation for Email
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validation for Password
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordInput.value.trim())) {
        passwordStrength.textContent = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.';
        alert('Please enter correct password.');
        return;
    } else {
        passwordStrength.textContent = '';
    }

    // Validation for Confirm Password
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        alert('Passwords do not match.');
        return;
    }

    // Validation for Terms and Conditions checkbox
    const termsAndConditionsCheckbox = document.getElementById('termsAndConditions');
    if (!termsAndConditionsCheckbox.checked) {
        alert('Please agree to the Terms and Conditions.');
        return;
    }

    // If all validations pass, you can proceed with form submission
    alert('Registration successful!');
}
