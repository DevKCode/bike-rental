import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import passport from 'passport'

class Authentication {


    validation() {
        const LocalStrategy = passportLocal.Strategy;
        passport.use(
            new LocalStrategy({
                usernameField: 'email'
            }, (email, password, done) => {

            })
        )
    }

}
export default Authentication;