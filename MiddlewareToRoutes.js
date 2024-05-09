// Example protected route for editing a task
app.put('/tasks/:taskId', authenticateToken, authorizeUser, (req, res) => {
    // Handle task editing
    res.json({ message: 'Task edited successfully' });
});
