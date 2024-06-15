export const validateUsername = (username: string): boolean => {
    const regex = /^[a-zA-Z0-9]{3,16}$/;
    return regex.test(username);
};

export const validatePassword = (password: string): boolean => {
    const regex = /^.{6,}$/;
    return regex.test(password);
};
