import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import passport from 'passport'

class Authentication {

    constructor() {
        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });
        passport.deserializeUser(function (id, done) {

        });
    }
    validation() {
        const LocalStrategy = passportLocal.Strategy;
        passport.use(
            new LocalStrategy({
                usernameField: 'email'
            }, (email, password, done) => {

            })
        )
    }
    isValid() {

    }
}
export default Authentication;