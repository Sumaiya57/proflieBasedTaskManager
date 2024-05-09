app.put('/tasks/:taskId', authenticateToken, (req, res) => {
    const taskId = req.params.taskId;
    const { title, description, status } = req.body;
    const userId = req.user.userId; // Get user ID from authenticated user

    // Update task associated with user ID
    Task.findOneAndUpdate({ _id: taskId, userId }, { title, description, status }, { new: true }, (err, task) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update task' });
        }
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task updated successfully', task });
    });
});
