function authenticateToken(req, res, next) {
    // Extract JWT token from request headers
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify JWT token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user; // Set user object in request for further use
        next();
    });
}
