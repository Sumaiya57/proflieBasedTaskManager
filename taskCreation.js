app.post('/tasks', authenticateToken, (req, res) => {
    const { title, description, status } = req.body;
    const userId = req.user.userId; // Get user ID from authenticated user

    // Create task and associate with user ID
    Task.create({ title, description, status, userId }, (err, task) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create task' });
        }
        res.status(201).json({ message: 'Task created successfully', task });
    });
});
