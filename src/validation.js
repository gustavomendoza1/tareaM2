export const validateEmail = (email) => {
    if (!email) {
        return 'Email is required';
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) {
        return 'Email is invalid';
    } else if (email.length > 35) {
        return 'Email is too long (maximum 35 characters)';
    }

    return '';
};

export const validatePassword = (password) => {
    if (!password) {
        return 'Password is required';
    } else if (!/\d/.test(password)) {
        return 'Password must contain at least one number';
    } else if (password.length < 6 || password.length > 10) {
        return 'Password must be between 6 and 10 characters';
    }

    return '';
};

export const validate = (formData, setErrors) => {
    const { email, password } = formData;
    const errors = {};

    errors.email = validateEmail(email);
    errors.password = validatePassword(password);

    setErrors(errors);
};