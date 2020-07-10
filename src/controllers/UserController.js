import User from '../models/User.js';
import Joi from 'joi';
import jwt from 'jsonwebtoken';

class NewUser {

    async createUser(request, response) {
        const { name, email, age } = request.body;

        const userSchema = Joi.object().keys({
            name: Joi.string().min(3).required(),
            age: Joi.number().integer().min(12).required()
        });

        const validation = Joi.validate({
            name: name,
            email: email,
            age: age
        }, userSchema);
        console.log('validation', validation);
        console.log('received Data', ` Data ${name}/ ${email}/ ${age}`);

        // verify request token
        jwt.verify(request.token, '123456', (err, authData) => {
            if (err) {
                response.sendStatus(403);
            } else {
                response
                    .status(200)
                    .json({
                        message: 'created new user',
                        authData
                    });
            }
        });
        // const createdUser = await User.create({
        //     name: name,
        //     email: email,
        //     age: age
        // });
        // response
        //     .status(200)
        //     .json({
        //         message: createdUser
        //     });
    }
}
export default NewUser;



