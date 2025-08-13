
// Get all users
export const getUsers = (req, res) => {
    res.send("All users");
};

// Register new user
export const registerUser = (req, res) => {
    const newUser = req.body;
    res.status(201).json({
        message: "User registered successfully",
        data: newUser
    });
};

// Update user
export const updateUser = (req, res) => {
    const { id } = req.params;
    res.send(`User with ID ${id} updated`);
};

// Delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    res.send(`User with ID ${id} deleted`);
};