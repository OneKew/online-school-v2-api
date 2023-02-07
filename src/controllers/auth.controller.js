export const login = (req, res) => {
    res.status(200).json({
        login: true
    });
}

export const registerUser = (req, res) => {
    res.status(200).json({
        register: true
    });
}