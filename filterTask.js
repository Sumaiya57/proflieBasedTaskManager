app.get('/tasks/status/:status', authenticateToken, (req, res) => {
    const { status } = req.params;

    // Fetch tasks filtered by status
    Task.find({ status }, (err, tasks) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch tasks' });
        }
        res.json(tasks);
    });
});
