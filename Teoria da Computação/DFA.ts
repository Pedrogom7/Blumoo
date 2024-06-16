function validateUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_.]{2,14}$/;
    return usernameRegex.test(username);
}

function validatePassword(password: string): boolean {
    const lengthValid = password.length >= 8 && password.length <= 20;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return lengthValid && hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar;
}

// Testando as funções
console.log(validateUsername("user_name")); // true
console.log(validateUsername("us")); // false
console.log(validatePassword("Password1!")); // true
console.log(validatePassword("pass1!")); // false
