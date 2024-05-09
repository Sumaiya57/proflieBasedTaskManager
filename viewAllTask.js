app.get('/tasks/all', authenticateToken, (req, res) => {
    // Fetch all tasks (no filtering)
    Task.find({}, (err, tasks) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch tasks' });
        }
        res.json(tasks);
    });
});
