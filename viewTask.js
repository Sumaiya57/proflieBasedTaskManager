app.get('/tasks', authenticateToken, (req, res) => {
    const userId = req.user.userId; // Get user ID from authenticated user

    // Fetch tasks associated with user ID
    Task.find({ userId }, (err, tasks) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch tasks' });
        }
        res.json(tasks);
    });
});
