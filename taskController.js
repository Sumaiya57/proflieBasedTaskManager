
const db = require('./db');

// Create a new task
function createTask(title, description, userId) {
    const sql = 'INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)';
    db.query(sql, [title, description, userId], (err, result) => {
        if (err) throw err;
        console.log('Task created successfully');
    });
}

// Retrieve all tasks
function getTasks() {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log('Tasks:', results);
    });
}

// Update task by ID
function updateTask(id, title, description) {
    const sql = 'UPDATE tasks SET title=?, description=? WHERE id=?';
    db.query(sql, [title, description, id], (err, result) => {
        if (err) throw err;
        console.log('Task updated successfully');
    });
}

// Delete task by ID
function deleteTask(id) {
    const sql = 'DELETE FROM tasks WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        console.log('Task deleted successfully');
    });
}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
