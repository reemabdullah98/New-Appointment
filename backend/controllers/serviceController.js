
// Get all services
export const getServices = (req, res) => {
    res.send("All services");
};

// Add new service
export const createService = (req, res) => {
    const newService = req.body;
    res.status(201).json({
        message: "Service created successfully",
        data: newService
    });
};

// Update service
export const updateService = (req, res) => {
    const { id } = req.params;
    res.send(`Service with ID ${id} updated`);
};

// Delete service
export const deleteService = (req, res) => {
    const { id } = req.params;
    res.send(`Service with ID ${id} deleted`);
};