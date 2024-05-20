import jwt from 'jsonwebtoken';

const AuthSecret = process.env.AUTH_SECRET

export default (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, AuthSecret);
        req.user = decoded;
        next();
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
        }

        return res.status(400).json({ message: 'Bad Request: Invalid token.' });
    }
};
