app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Fetch user from database by email (not implemented here)

        // Verify password
        const user = { /* user object fetched from database */ };
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
