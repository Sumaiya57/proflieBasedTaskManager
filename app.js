const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define secret key for JWT
const JWT_SECRET = 'your_secret_key_here';

// database connection and models would go here

// routes would go here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
