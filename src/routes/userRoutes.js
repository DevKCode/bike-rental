import express from 'express';
import NewUser from '../controllers/UserController.js'
import jwt from 'jsonwebtoken';

const newUser = new NewUser();
const userRoutes = express.Router();

userRoutes.post('/user', verifyToken, newUser.createUser);
userRoutes.post('/login', (request, response) => {
    // Mock user
    const user = {
        id: 1,
        username: 'john',
        email: 'john@gmail.com'
    };
    jwt.sign({ user }, '123456', (err, token) => {
        response.json({
            token
        });
    });
    //     response
    //         .status(200)
    //         .json({
    //             message: 'thank yoy'
    //         })
});

// Middleware function
function verifyToken(request, response, next) {
    console.log('inside of verifytoken', request);
    response.status(403);
    // Get the auth resutl
    const bearerHeader = request.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        console.log('have token');
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        request.token = bearerToken;
        next();
    } else {
        console.log('no token');
        response.sendStatus(403);
    }
}

export default userRoutes;