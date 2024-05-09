
const db = require('./db');

// Create a new user
function createUser(username, email) {
    const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
    db.query(sql, [username, email], (err, result) => {
        if (err) throw err;
        console.log('User created successfully');
    });
}

// Retrieve all users
function getUsers() {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log('Users:', results);
    });
}

// Update user by ID
function updateUser(id, username, email) {
    const sql = 'UPDATE users SET username=?, email=? WHERE id=?';
    db.query(sql, [username, email, id], (err, result) => {
        if (err) throw err;
        console.log('User updated successfully');
    });
}

// Delete user by ID
function deleteUser(id) {
    const sql = 'DELETE FROM users WHERE id=?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        console.log('User deleted successfully');
    });
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
};
