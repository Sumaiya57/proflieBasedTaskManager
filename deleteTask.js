app.delete('/tasks/:taskId', authenticateToken, (req, res) => {
    const taskId = req.params.taskId;
    const userId = req.user.userId; // Get user ID from authenticated user

    // Delete task associated with user ID
    Task.findOneAndDelete({ _id: taskId, userId }, (err, task) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete task' });
        }
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    });
});
