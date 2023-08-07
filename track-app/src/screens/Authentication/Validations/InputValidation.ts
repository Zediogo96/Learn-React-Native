interface IInputValidation {
    valid: boolean;
    message: string;
}

export const validateUsername = (username: string) : IInputValidation => {
    if (username.length < 6) return { valid: false, message: "Username must be at least 6 characters long" };
    else if (username.length > 18) return { valid: false, message: "Username must be less than 18 characters long" };
    else if (username.search(/[^a-zA-Z0-9]/) !== -1) return { valid: false, message: "Username must contain only letters and digits" };
    else return { valid: true, message: "" };
};

export const validateEmail = (email: string) : IInputValidation => {   
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return { valid: false, message: "Invalid email" };
    else return { valid: true, message: "" };
};

export const validatePassword = (password: string) : IInputValidation => {
    if (password.length < 8) return { valid: false, message: "Password must be at least 8 characters long" };
    else if (password.length > 20) return { valid: false, message: "Password must be less than 20 characters long" };
    else if (password.search(/\d/) === -1) return { valid: false, message: "Password must contain at least one digit" };
    else if (password.search(/[A-Z]/) === -1) return { valid: false, message: "Password must contain at least uppercase letter" };
    else if (password.search(/[!@#$%^&*()_+]/) === -1) return { valid: false, message: "Password must contain at least one special character" };
    else if (password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1) return { valid: false, message: "Password must contain only letters, digits and special characters" };
    else return { valid: true, message: "" };
};


